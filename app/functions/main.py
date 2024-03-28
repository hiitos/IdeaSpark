# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn
from firebase_admin import initialize_app
import json

# initialize_app()
#
#
# @https_fn.on_request()
# def on_request_example(req: https_fn.Request) -> https_fn.Response:
#     return https_fn.Response("Hello world!")

@https_fn.on_call()
def test_handler(req: https_fn.CallableRequest) -> dict:
    print(f'params : {req.data["params"]}')

    # testで生成された単語のリストを返すようにする
    result = ["Hello World!", "Test Random Words", "Firebase Functions", ":)"]
    response = {
        "status": 200,
        "body": json.dumps(result)
    }
    return response
