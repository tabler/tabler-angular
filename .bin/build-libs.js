const { getLibs, readProjectFile, execInProjectPath } = require('./utils');

const libs = getLibs();

libs.map(lib => {
  console.log(` [ build ] Building lib ${lib}`);

  const ngPackagr = './node_modules/.bin/ng-packagr';

  const libPath = `libs/${lib}/package.json`;
  const libConfig = readProjectFile(libPath, true);

  execInProjectPath(`${ngPackagr} -p ${libPath}`);

  const { copyPaths } = libConfig.ngPackage || []

  if (copyPaths && copyPaths.length) {
    copyPaths
      .forEach(({ from, to })=> {
        console.log(` [ build ] ${lib}: copy ${from} => ${to} `);
        execInProjectPath(`npx cpx "${from}" "${to}"`);
      })
  }

  console.log(` [ build ] Building lib ${lib} done`);

});
