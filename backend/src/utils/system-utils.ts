import { ChildProcess } from 'child_process';

export const gracefulKill = (process: ChildProcess | undefined, timeoutMs: number) => {
  return new Promise<void>(resolve => {
    if (process === undefined) {
      resolve();
      return;
    }
    if (process.exitCode !== null) {
      // Already exited, no need to do anything
      resolve();
      return;
    }
    // Attempt to kill nicely with a SIGINT and SIGTERM, but send a SIGKILL if it hasn't exited in timeoutMs milliseconds.
    const forceKillTimeout = setTimeout(() => {
      process.kill('SIGKILL');
      resolve(); // We're assuming the SIGKILL will work here. If it doesn't, nothing would work.
    }, timeoutMs);
    process.on('exit', () => {
      clearTimeout(forceKillTimeout);
      resolve(); // Success - the SIGINT/SIGTERM worked (or, at least, something did).
    });
    process.kill('SIGINT');
    process.kill('SIGTERM');
  });
};
