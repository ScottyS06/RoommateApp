import mongoose, { ConnectOptions, Mongoose } from 'mongoose';
import { baseConfig } from '../utils/config';

let DB_CONNECTION: Mongoose | undefined;

const getConfig = () => {
  if (process.env.NODE_ENV === 'PRODUCTION') {
    return {
      connectionString: `mongodb://localhost:${baseConfig.localDb.port}/${baseConfig.localDb.dbName}`,
      //   username: secretsConfig.prodDb.username,
      //   password: secretsConfig.prodDb.password,
    };
  } else {
    // default to DEVELOPMENT
    return {
      connectionString: `mongodb://localhost:${baseConfig.localDb.port}/${baseConfig.localDb.dbName}`,
    };
  }
};

const connect = async () => {
  const config = getConfig();
  const connectionOptions: ConnectOptions = {
    readPreference: 'primary',
    w: 'majority',
    readConcern: { level: 'majority' },
    appName: 'RoommateApp-Client',
  };
  try {
    DB_CONNECTION = await mongoose.connect(config.connectionString, connectionOptions);
  } catch (e) {
    DB_CONNECTION = undefined;
    console.log('error starting database');
    return;
  }
};

const disconnect = async () => {
  if (DB_CONNECTION) {
    await DB_CONNECTION.disconnect();
    DB_CONNECTION = undefined;
  }
};

export const dbClient = {
  connect,
  disconnect,
};
