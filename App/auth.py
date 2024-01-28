import re
from flask import Blueprint, render_template


auth = Blueprint('auth', __name__)


@auth.route('/login')
def login():
    return render_template("auth/login.html")


@auth.route('/logout')
def logout():
    return "Bye see you soon"


@auth.route('/signup')
def sign_up():
    return render_template("auth/signUp.html")
