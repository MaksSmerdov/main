import mongoose from 'mongoose';
import logger from '../logger.js';

export async function connectDB () {
  try {
    await mongoose.connect('mongodb://localhost:27017');
    logger.info('БД успешно подключена');
  } catch (err) {
    logger.error('Ошибка соединения с БД', err.message);
    process.exit(1);
  }
}

export const carbonDb = mongoose.connection.useDb('main_server-carbon');
export const utvhDb = mongoose.connection.useDb('main_server-utvh');
