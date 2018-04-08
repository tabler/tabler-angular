const { getApps, execInProjectPath } = require('./utils');

const apps = getApps();

apps.map(app => {
  console.log(` [ build ] Building app ${app}`);

  execInProjectPath(`ng build --prod --app ${app}`);

  console.log(` [ build ] Building app ${app} done`);

});
