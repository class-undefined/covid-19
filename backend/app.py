from flask import Flask, request
from flask_cors import CORS
from utils import create_ok
import services
app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/broadcast", methods=["GET"])
def broadcase():
    return create_ok(services.get_broadcast())


@app.route("/global_map", methods=["GET"])
def global_map():
    return create_ok(services.get_global_map())


@app.route("/confirm_line", methods=["GET"])
def confirm_line():
    return create_ok(services.get_confirm_line())


@app.route("/country_line", methods=["GET"])
def country_line():
    name: str = request.args.get("name")
    return create_ok(services.get_country_line(name))


@app.route("/city_line", methods=["GET"])
def city_line():
    code: str = request.args.get("code")
    return create_ok(services.get_city_line(code))


@app.route("/china_confirm", methods=["GET"])
def china_confirm():
    return create_ok(services.get_china_confirm())
