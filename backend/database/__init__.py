from pymongo import MongoClient

client = None
def init_db(app):
    global client 
    client = MongoClient(app.config["MONGO_URI"])

def get_db(db_uri):
    db = client[db_uri]
    return db
