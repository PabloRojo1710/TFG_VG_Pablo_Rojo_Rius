from flask import Blueprint, jsonify, request
from database import get_db

from utils.helpers import getAccountByApiKey, insert_log

engine_api = Blueprint('engine_api', __name__)

@engine_api.route('/get-puntuation/<collection>', methods=['POST'])
def get_all_puntuation(collection):
    api_key = request.get_json()['api_key']
    if not api_key:
        return jsonify('Api key missing'), 400
    account = getAccountByApiKey(api_key)
    if not account:
        return jsonify(''), 401
    
    db = get_db('master_db')
    account_obj = db.user.find_one({"user_email": account["user_email"]})
    db = get_db(account_obj["database"])

    result = []
    dirty_result = db.get_collection(collection).find()
    for doc in dirty_result:
        del doc['_id']
        result.append(doc)
    insert_log(account_obj["database"], "GET ALL PUNTUATION", account_obj["user_email"])
    return jsonify(result), 200

@engine_api.route("/get-puntuation/<collection>", methods=['POST'])
def get_one_puntuation(collection):
    api_key = request.get_json()['api_key']
    if not api_key:
        return jsonify('Api key missing'), 400
    account = getAccountByApiKey(api_key)
    if not account:
        return jsonify(''), 401
    
    db = get_db('master_db')
    account_obj = db.user.find_one({"user_email": account["user_email"]})
    db = get_db(account_obj["database"])

    player_name = request.get_json()["player_name"]

    result = []
    dirty_result = db.get_collection(collection).find_one({"name": player_name})
    for doc in dirty_result:
        del doc['_id']
        result.append(doc)
    insert_log(account_obj["database"], "GET ONE PUNTUATION", account_obj["user_email"])
    return jsonify(result), 200

@engine_api.route("/add-puntuation/<collection>", methods=['POST'])
def add_one_puntuation(collection):
    print(request)
    api_key = request.get_json()['api_key']
    if not api_key:
        return jsonify('Api key missing'), 400
    account = getAccountByApiKey(api_key)
    if not account:
        return jsonify(''), 401
    
    db = get_db('master_db')
    account_obj = db.user.find_one({"user_email": account["user_email"]})
    db = get_db(account_obj["database"])
    #db = get_db("test_database")
    object_to_insert = request.get_json()["object_to_insert"]
    player_name = request.get_json()["player_name"]
    
    if db.get_collection(collection).find_one({"name": player_name}):
        db.get_collection(collection).update_one({"name": player_name}, {"$set": object_to_insert})
    else:
        object_to_insert["name"] = player_name
        db.get_collection(collection).insert_one(object_to_insert)
    insert_log(account_obj["database"], "INSERT PUNTUATION", account_obj["user_email"])
    return jsonify('OK'), 200

@engine_api.route("/delete-puntuation/<collection>", methods=['DELETE'])
def delete_one_puntuation(collection):
    api_key = request.get_json()['api_key']
    if not api_key:
        return jsonify('Api key missing'), 400
    account = getAccountByApiKey(api_key)
    if not account:
        return jsonify(''), 401
    
    db = get_db('master_db')
    account_obj = db.user.find_one({"user_email": account["user_email"]})
    db = get_db(account_obj["database"])

    player_name = request.get_json()["player_name"]
    db.get_collection(collection).delete_one({"name": player_name})
    insert_log(account_obj["database"], "DELETE PUNTUATION", account_obj["user_email"])
    return jsonify('OK'), 200