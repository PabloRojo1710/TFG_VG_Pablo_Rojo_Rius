from flask import Flask
from database import init_db
from flask_jwt_extended import JWTManager
from flask_cors import CORS
app = Flask(__name__)

def ini_app(configuration):
    app.config.from_object(configuration)
    with app.app_context():
        CORS(app, supports_credentials=True,)
        from routers.engine_api import engine_api 
        app.register_blueprint(engine_api, url_prefix='/engine')

        from routers.admin_api import admin_api 
        app.register_blueprint(admin_api, url_prefix='/admin')

        from routers.control_panel_api import control_panel_api 
        app.register_blueprint(control_panel_api, url_prefix='/control-panel')

        from routers.auth import auth 
        app.register_blueprint(auth)

        init_db(app)
        jwt = JWTManager(app)
        return app