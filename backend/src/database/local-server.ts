import child_process, { ChildProcess } from 'child_process';
import { baseConfig } from '../utils/config';
import { gracefulKill } from '../utils/system-utils';

let dbProcess: ChildProcess;
const startPrimaryServer = () => {
  const args = [`--config=/opt/homebrew/etc/mongod.conf`, `--port=${baseConfig.localDb.port}`];
  dbProcess = child_process.spawn('mongod', args, { stdio: ['ignore', 'pipe', 'ignore'] });
  dbProcess.stderr?.on('data', data => console.error(data.toString()));
};

const shutdownPrimaryServer = async () => {
  if (dbProcess === undefined) return;
  await gracefulKill(dbProcess, 30 * 1000);
};

const initialize = async (): Promise<void> => {
  if (dbProcess !== undefined) return;

  startPrimaryServer();
};

export const localDbServer = {
  initialize,
  shutdown: shutdownPrimaryServer,
};
