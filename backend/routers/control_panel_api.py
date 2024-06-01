from flask import Blueprint, jsonify
from database import get_db
from flask_jwt_extended import jwt_required, get_jwt_identity
import secrets
from utils.helpers import add_information_to_db

control_panel_api = Blueprint('control_panel_api', __name__)

@control_panel_api.route("/generate-api-key", methods=['POST'])
@jwt_required
def generate_api_key():
    current_identity = get_jwt_identity()
    
    db = get_db('master_db')
    db.get_collection('api_keys').delete_one({'user_email': current_identity})
    
    api_key = secrets.token_hex(16)
    db.get_collection('api_keys').insert_one({
        "user_email": current_identity,
        "api_key": api_key
    })

    return jsonify(api_key = api_key), 201

@control_panel_api.route("/get-api-key", methods=['GET'])
@jwt_required()
def get_api_key():
    current_identity = get_jwt_identity()
    
    db = get_db('master_db')
    api_key_doc = db.get_collection('api_keys').find_one({"user_email": current_identity})
    if(api_key_doc):
        return jsonify(api_key = api_key_doc["api_key"]), 200
    
    return jsonify(''), 200

@control_panel_api.route("/get-all-data", methods=['GET'])
@jwt_required()
def get_all_data():
    current_identity = get_jwt_identity()
    
    db = get_db('master_db')
    account_obj = db.account.find_one({"user_email": current_identity })
    db = get_db(account_obj["database"])

    all_collections = db.list_collection_names()
    return_obj = {}
    for col in all_collections:
        if col != "default" and col != "logs":
            return_obj[col] = list(db.get_collection(col).find({}, {"_id": 0}))
    
    return jsonify(data=return_obj), 200

@control_panel_api.route("/get-all-logs", methods=['GET'])
@jwt_required()
def get_all_logs():
    current_identity = get_jwt_identity()
   
    db = get_db('master_db')
    account_obj = db.account.find_one({"user_email": current_identity })
    db = get_db(account_obj["database"])

    all_logs = list(db.logs.find({}))
    for l in all_logs:
        l["_id"] = str(l["_id"])

    return jsonify(data=all_logs), 200
