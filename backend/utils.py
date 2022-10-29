from typing import Dict, Union


from flask import make_response, jsonify


def create_ok(data: Dict, message: Union[str, None] = None):
    message = message or "操作成功"
    return make_response(jsonify({"data": data, "code": 20000, "message": message}))


def create_error(message: Union[str, None] = None):
    message = message or "操作失败"
    return make_response(jsonify({"data": None, "code": 20001, "message": message}))
