// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'test-aplazo',
    appId: '1:40262668710:web:5cb675b032e75c698aff67',
    databaseURL: 'https://test-aplazo-default-rtdb.firebaseio.com',
    storageBucket: 'test-aplazo.appspot.com',
    locationId: 'northamerica-northeast1',
    apiKey: 'AIzaSyDc5RKUOymcNqbXOd7DrMJkDBk4iJRFO0Q',
    authDomain: 'test-aplazo.firebaseapp.com',
    messagingSenderId: '40262668710',
    measurementId: 'G-EEC94LSD5Y',
  },
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDc5RKUOymcNqbXOd7DrMJkDBk4iJRFO0Q',
    authDomain: 'test-aplazo.firebaseapp.com',
    databaseURL: 'https://test-aplazo-default-rtdb.firebaseio.com',
    projectId: 'test-aplazo',
    storageBucket: 'test-aplazo.appspot.com',
    messagingSenderId: '40262668710',
    appId: '1:40262668710:web:5cb675b032e75c698aff67',
    measurementId: 'G-EEC94LSD5Y',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
