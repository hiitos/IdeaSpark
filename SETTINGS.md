# セットアップ手順

node version : 18.16.0  
python version : 3.12.0

## fireabse
```bash
npm install -g firebase-tools
firebase login
```

## python venv作成
```bash
cd app/functions
python -m venv venv
source venv/bin/activate
python -m pip install -r requirements.txt
```

## app
appディレクトリ配下に.env配置する  
.env  
```
REACT_APP_FIREBASE_APIKEY="<FIREBASE_APIKEY>"
REACT_APP_FIREBASE_AUTHDOMAIN="<FIREBASE_AUTHDOMAIN>"
REACT_APP_FIREBASE_PROJECTID="<FIREBASE_PROJECTID>"
REACT_APP_FIREBASE_STORAGEBUCKET="<FIREBASE_STORAGEBUCKET>"
REACT_APP_FIREBASE_MESSAGINGSENDERID="<FIREBASE_MESSAGINGSENDERID>"
REACT_APP_FIREBASE_APPID="<FIREBASE_APPID>"
REACT_APP_FIREBASE_MEASUREMENTID="<FIREBASE_MEASUREMENTID>"
```