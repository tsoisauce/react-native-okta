# React Native Okta

## Pre-requisites

This helpful Okta [Development Blog](https://developer.okta.com/blog/2019/11/14/react-native-login)

- Node `brew install node`
- Yarn `brew install yarn`
- Watchman (this is Facebook's hot loader) `brew install watchman`
- React Native CLI `install -g react-native-cli` or npx for non-global
- Schematics CLI `npm install -g @angular-devkit/schematics-cli` or npx for non-global

## Creating new React Native app with Okta via React Native CLI

- Create React Native app: `react-native init <APP_NAME>`
- Register for an [Okta Developer account](https://developer.okta.com/login/) and create a new native application...make sure that all URI (login, logout, initate login) point to the same place: `com.okta.dev-<ACCOUNT_ID>:/callback`
- Add Okta Dev Schematic as a developer dependency `yarn add -D @oktadev/schematics`
- Connecting React, Okta with Swift. React Native code gets complied down to Swift so there is a lot of configuration and setting that needs to be matched inside `ios` file. Essentially node modules have to be mapped within Podfile, iOS version of a package manager. To help facilitate this, Okta has developed a schematic package that can help bootstrap your React Native project. It will sync all dependencies between node and pods. Run the following command to boot strap with Okta Schematics. `schematics @oktadev/schematics:add-auth`. This will boostrap your app with Okta auth.config.
- OIDC app's issuer URL can be found in `API -> Application Server` and will look like this: `https://<OKTA_DOMAIN>/oauth2/default`
- OIDC app's client ID is located inside your Okta app's settings.
- Run test to make sure all is working: `yarn test`
- Connecting node with swift. Open iOS file in xcode: `open ios/<APP_NAME>.xcworkspace`. Right click on the project folder and `create new file`. You can name this file anything. Reason is to access native features with React, we will need a dummy swift file so that node can be compatible swift. Select `Don't Create Bridge Header` option.
- [Flipper Issues](https://github.com/facebook/react-native/issues/26118): `try to replace use_flipper! with use_flipper!({ 'Flipper-Folly' => '2.3.0' }) in your Podfile, then remove Podfile.lock and run pod install`
- Install all Node dependencies: `yarn`
- Install pods: `cd ios && pod install && cd ..`
- Start Watchman `yarn start`
- Start Simulator `yarn ios`

## Requirements

- Node 12
- Yarn
- Schematics
