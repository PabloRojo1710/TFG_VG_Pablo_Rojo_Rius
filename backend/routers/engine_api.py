from flask import Blueprint, jsonify, request
from database import get_db

engine_api = Blueprint('engine_api', __name__)

@engine_api.route('/get-puntuation/<collection>', methods=['GET'])
def get_all_puntuation(collection):
    
    db = get_db('user_1_game_1') #GET BY THE JWT FOR THE ACCOUNT AND API KEY
    result = []
    dirty_result = db.get_collection(collection).find()
    for doc in dirty_result:
        del doc['_id']
        result.append(doc)
    return jsonify(result)

@engine_api.route("/get-puntuation/<collection>/<user_name>", methods=['GET'])
def get_one_puntuation(collection, user_name):
    db = get_db('user_1_game_1') #GET BY THE JWT FOR THE ACCOUNT AND API KEY
    result = []
    dirty_result = db.get_collection(collection).find({"name": user_name})
    for doc in dirty_result:
        del doc['_id']
        result.append(doc)
    return jsonify(result)

@engine_api.route("/add-puntuation/<collection>", methods=['POST'])
def add_one_puntuation(collection):
    object_to_insert = request.get_json()["object_to_insert"]
    db = get_db('user_1_game_1') #GET BY THE JWT FOR THE ACCOUNT AND API KEY
    db.get_collection(collection).insert_one(object_to_insert)
   
    return jsonify('OK'), 200

@engine_api.route("/update-puntuation/<collection>/<user_name>", methods=['POST'])
def update_one_puntuation(collection, user_name):
    key_to_update = request.get_json()["key_to_update"]
    value_to_update = request.get_json()["value_to_update"]

    db = get_db('user_1_game_1') #GET BY THE JWT FOR THE ACCOUNT AND API KEY
    db.get_collection(collection).update_one({"name": user_name}, {"$set": {key_to_update: value_to_update}})
   
    return jsonify('OK'), 200

@engine_api.route("/delete-puntuation/<collection>/<user_name>", methods=['DELETE'])
def delete_one_puntuation(collection, user_name):

    db = get_db('user_1_game_1') #GET BY THE JWT FOR THE ACCOUNT AND API KEY
    db.get_collection(collection).delete_one({"name": user_name})
   
    return jsonify('OK'), 200