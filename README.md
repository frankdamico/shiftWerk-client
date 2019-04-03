# ShiftWerk client

Community application devoted to connecting service industry workers with extra shifts and employers with the extra help they need. Hybrid mobile/web app developed using Ionic/Angular. Meant for use with [shiftWerk](https://github.com/daft-funk/shiftwerk).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- npm ^6.4.1
- Node ^10.15.0
- ionic CLI ^4.12.0

Cordova plugins (install with `ionic cordova plugin add <plugin-name>`):
- cordova-plugin-camera ^4.0.3
- cordova-plugin-device ^2.0.2
- cordova-plugin-googleplus ^7.0.0
- cordova-plugin-ionic-keyboard ^2.1.3
- cordova-plugin-ionic-webview ^3.1.2
- cordova-plugin-splashscreen ^5.0.2
- cordova-plugin-statusbar ^2.4.2
- cordova-plugin-whitelist ^1.3.3
- cordova-sqlite-storage ^3.2.0

You will need your project registered with [Google API Developer Console](https://console.developers.google.com/apis/credentials) as well as [Firebase](https://firebase.google.com/).

For the Android build, you will need:
- Java JDK 1.8.0
- Android SDK
- Android target
- Gradle

### Installing

`npm install` for dependencies

You can feel free to run `ionic serve` to play with the app using our API server and Google Client ID. To run with your own server, you will need to get a `WEB_APPLICATION_CLIENT_ID` and `REVERSED_CLIENT_ID` from [Firebase](https://firebase.google.com/) and replace the corresponding values in lines 85 and 86 of `config.xml` with your new values. Additionally, you will need to edit the value `serverUrl` in `src/app/environment.ts` to match your running server.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With


## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

## Authors

## License

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
