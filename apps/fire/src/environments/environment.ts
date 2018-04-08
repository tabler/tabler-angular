// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD0emp0zI_qw2CCxo6aY2MzTVvp7GbvAGg',
    authDomain: 'tabler-angular-fire.firebaseapp.com',
    databaseURL: 'https://tabler-angular-fire.firebaseio.com',
    projectId: 'tabler-angular-fire',
    storageBucket: '',
    messagingSenderId: '856023319444'
  }
}
