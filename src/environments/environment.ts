// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    databaseURL: '<your-database-URL>',
    measurementId: '<your-measurement-id>',

    apiKey: "AIzaSyAevl7HWb1n3exb5rDMyLzNK2fr4AYUu3Y",
    authDomain: "firechat-6062c.firebaseapp.com",
    projectId: "firechat-6062c",
    storageBucket: "firechat-6062c.appspot.com",
    messagingSenderId: "86978772972",
    appId: "1:86978772972:web:90f76c19594ce509cc8ac9"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
