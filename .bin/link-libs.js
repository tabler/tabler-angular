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


const linkLibs = (libs) => {
  return Promise.all(libs.map(lib => {

    const scopedName = `${scope}/${lib}`

    return execInProjectPathPromise(`npm link ${scopedName}`)
      .then(() => {
        console.log(` [ link ] [${lib}] npm link ${scopedName}`);
        return lib;
      })
  }))

};

return Promise.all(libs.map(linkLib))
  .then(linkLibs)
  .catch(err => {
    console.log(` [ link ] An error occurred:`, err);
  });
