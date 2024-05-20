from keys import mongodb_base_uri
from datetime import timedelta

class Config(object):
    FLASK_ENV = 'development'
    DEBUG = True
    TESTING = False
    SECRET_KEY = "Random String"
    JWT_SECRET_KEY = 'projo-jwt'
    JWT_COOKIE_SECURE = False #Change True while in production
    JWT_TOKEN_LOCATION = ['cookies']
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=15)
    JWT_COOKIE_HTTPONLY = False
    JWT_COOKIE_SAMESITE = None
    JWT_SESSION_COOKIE = False
    CORS_SUPPORTS_CREDENTIALS = True
    CORS_EXPOSE_HEADERS = 'Set-Cookie'
    JWT_COOKIE_CSRF_PROTECT = False

class DevConfig(Config):
    MONGO_URI = mongodb_base_uri
    
class TestingConfig(Config):
    MONGO_URI = mongodb_base_uri