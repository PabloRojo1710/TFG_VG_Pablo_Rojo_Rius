from database import get_db
import json, time

def getAccountByApiKey(api_key):
    db = get_db('master_db')
    account = db.get_collection('api_keys').find_one({"api_key": api_key})
    
    return account


def add_information_to_db():
    with open("./static/Invented_Players_TImes_v2.json", "r", encoding="UTF-8") as json_file:
        data = json.load(json_file)
    api_key = '7cb9de4d76e1d8a946b6e3809a3ec130'
    collection = "Puntuation"
    for entry in data:
        account = getAccountByApiKey(api_key)
        print(account)
        db = get_db('master_db')
        account_obj = db.account.find_one({"user_email": account["user_email"]})
        db = get_db(account_obj["database"])
        #db = get_db("test_database")
        object_to_insert = {"time": entry["time"]}
        player_name = entry["name"]
        
        if db.get_collection(collection).find_one({"name": player_name}):
            db.get_collection(collection).update_one({"name": player_name}, {"$set": object_to_insert})
        else:
            object_to_insert["name"] = player_name
            db.get_collection(collection).insert_one(object_to_insert)
    
def insert_log(database, action, user_email):
    db = get_db('master_db')
    user = db.get_collection("user").find_one({"user_email": user_email})
    log_to_insert = {
        "action": action,
        "user_name": user["name"]+" "+user["surname"],
        "user_email": user_email,
        "created_at": int(time.time())
    }

    db = get_db(database)

    db.get_collection("logs").insert_one(log_to_insert)