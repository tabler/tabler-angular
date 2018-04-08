const { getLibs, getScope, execInProjectPathPromise } = require('./utils');

const libs = getLibs();
const scope = getScope();

const linkLib = (lib) => {
  const libPath = `libs/${lib}`;
  return execInProjectPathPromise(`npm link`, libPath)
    .then(() => {
      console.log(` [ link ] [${lib}] run npm link in ${libPath}`);
      return lib;
    })
};


const crossLink = (lib) => {
  const scopedName = `${scope}/${lib}`;
  const depLibs = libs.filter(dep => dep !== lib);
  return Promise.all(depLibs.map(dep => {
    const libPath = `libs/${dep}`;
    return execInProjectPathPromise(`npm link ${scopedName}`, libPath)
      .then(() => {
        console.log(` [ link ] [${lib}] npm link ${scopedName} in ${libPath}`);
        return lib;
      })

  }))

};

return Promise.all(libs.map(linkLib))
  .then(items => Promise.all(items.map(crossLink)))
  .catch(err => {
    console.log(` [ link ] An error occurred:`, err);
  });
