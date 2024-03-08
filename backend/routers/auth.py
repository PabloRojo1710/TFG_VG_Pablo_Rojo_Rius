from flask import Blueprint, jsonify, request
from database import get_db
from flask_jwt_extended import create_access_token, set_access_cookies, unset_jwt_cookies
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route("/register", methods=['POST'])
def register():
    email = request.form.get('email', None)
    password = request.form.get('password', None)
    name = request.form.get('name', None)
    surname = request.form.get('surname', None)
    enterprise = request.form.get('enterprise', None)

    if not email or not password or not name or not surname or not enterprise:
        return jsonify({"msg": "All fields are required"}), 400
    
    hashed_password = generate_password_hash(password)

    db = get_db('master_db')
    db.user.insert_one({'email': email, 'password': hashed_password, 'name': name, 'surname': surname, 'enterprise': enterprise})
    
    return jsonify({"msg": "User registered successfully"}), 201

@auth.route('/login', methods=['POST'])
def login():
    email = request.form.get('email', None)
    password = request.form.get('password', None)

    if not email or not password:
        return jsonify({"msg": "Email and password are required"}), 400
    db = get_db('master_db')
    user = db.user.find_one({"email": email})
    if user and check_password_hash(user['password'], password):
        access_token = create_access_token(identity=email)
        response = jsonify({
            'login': True,
            'access_token': access_token
        })
        set_access_cookies(response, access_token)
        return response, 200
    else:
        return jsonify({"msg": "Invalid credentials"}), 401


@auth.route("/logout", methods=['POST'])
def logout():
    resp = jsonify({'logout': True})
    unset_jwt_cookies(resp)
    return resp, 200