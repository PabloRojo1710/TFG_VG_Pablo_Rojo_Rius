from flask import Blueprint, jsonify
from database import get_db

admin_api = Blueprint('admin_api', __name__)

@admin_api.route('/get-all-admin', methods=['GET'])
def get_all_admin():
    db = get_db('master_db')

    result = db.get_collection('config').find()
    for r in result:
        print(r)
    return jsonify('ok')

@admin_api.route("/add-new-object", methods=['POST'])
def add_new_object():
    db = get_db('master_db')
    print(db)
    db.get_collection('config').insert_one({"name": "test"})
    return jsonify('OK'), 200

