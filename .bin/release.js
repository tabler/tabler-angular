const { patchLibVersion, patchLibDependencies, getLibs, getScope } = require('./utils');

const { version } = require('../package');

const libs = getLibs();
const scope = getScope();

libs.forEach(lib => {

  console.log('---------------------');

  const scopedName = `${scope}/${lib}`;
  const versionName = `${scopedName}@^${version}`;

  console.log(` [ release ] ${lib} => ${versionName}`);

  patchLibVersion(lib, version);
  patchLibDependencies(libs, scopedName, version);

});

