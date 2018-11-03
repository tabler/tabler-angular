const { getLibs, execInProjectPathPromise } = require('./utils');

const libs = getLibs();

const linkLib = (lib) => {
  const libPath = `dist/libs/${lib}`;
  return execInProjectPathPromise(`npm link`, libPath)
    .then(() => {
      console.log(` [ link ] [${lib}] run npm link in ${libPath}`);
      return lib;
    })
};
return Promise.all(libs.map(linkLib))
  .catch(err => {
    console.log(` [ link ] An error occurred:`, err);
  });
