from flask import Blueprint, render_template


views = Blueprint('views', __name__)


@views.route('/')
def home():
    return render_template("blog/index.html")


@views.route('/NavBar')
def navbar():
    return render_template("blog/navbar.html")


@views.route('/Home')
@views.route('/home')
def Home():
    return render_template("blog/home.html")


@views.route('/AddHours')
def AddHours():
    return render_template("blog/home.html")


@views.route('/ViewHours')
def ViewHours():
    return render_template("blog/home.html")


@views.route('/AddUser')
def AddUser():
    return render_template("auth/addUser.html")


@views.route('/EditUser')
def EditUser():
    return render_template("blog/EditAccount.html")
