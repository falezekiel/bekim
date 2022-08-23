// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



export const environment = {
  production: false,
  firebase: {apiKey: "AIzaSyDYp37k6ANyzDhcYkrFCjR4RVyHjW99OqI",
  authDomain: "bekim-fa10e.firebaseapp.com",
  projectId: "bekim-fa10e",
  storageBucket: "bekim-fa10e.appspot.com",
  messagingSenderId: "1064849374525",
  appId: "1:1064849374525:web:dd43e9658e74b31f69d954"
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
import initializeApp from 'firebase/app';
