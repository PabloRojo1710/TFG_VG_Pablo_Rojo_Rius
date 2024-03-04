from keys import mongodb_base_uri
class Config(object):
    FLASK_ENV = 'development'
    DEBUG = True
    TESTING = False
    SECRET_KEY = "Random String"

class DevConfig(Config):
    MONGO_URI = mongodb_base_uri
    
class TestingConfig(Config):
    MONGO_URI = mongodb_base_uri