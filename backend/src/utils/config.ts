import * as fs from 'fs';
import path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const CONFIG_FOLDER = `${PROJECT_ROOT}/config`;

interface BaseConfig {
  localDb: {
    mountDirectory: string;
    port: number;
    dbName: string;
  };
}

const resolveBaseConfig = () => {
  const baseConfigFile = path.resolve(CONFIG_FOLDER, 'config.json');
  const baseConfig = JSON.parse(fs.readFileSync(baseConfigFile).toString());
  //
  baseConfig.localDb.mountDirectory = path.resolve(PROJECT_ROOT, baseConfig.localDb.mountDirectory);
  //
  return baseConfig;
};
export const baseConfig: BaseConfig = resolveBaseConfig();
