import random
from flask import Flask


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = random._urandom(56)

    from .views import views
    from .auth import auth

    app.register_blueprint(auth, url_prefix='/auth')
    app.register_blueprint(views, url_prefix='/')

    return app
