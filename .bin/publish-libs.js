const { getLibs, getProjectFilePath } = require('./utils');
const { execSync } = require('child_process');

const libs = getLibs();

libs.map(lib => {
  const libPath = getProjectFilePath(`dist/libs/${lib}`);

  execSync(`cd ${libPath} && npm publish`);
  console.log(` [ publish ] Published ${lib} from ${libPath}`);
});
