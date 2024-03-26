.PHONY: start-app start-functions deploy-functions deploy-hosting

## アプリを起動する
start-app:
	cd app && npm start

## Firebase Functions Emulatorを起動する
start-functions:
	cd app/functions && firebase emulators:start --only functions

## Hostingをデプロイする
deploy-hosting:
	cd app && firebase deploy --only hosting

## Functionsをデプロイする
deploy-functions:
	cd app/functions && firebase deploy --only functions
