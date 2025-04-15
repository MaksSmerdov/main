import mongoose from 'mongoose';
import k301model from '../models/k301model.js';
import k302Model from '../models/k302Model.js';
import { deviceConfigs } from './deviceConfig.js';
import BB551Model from '../models/BB551Model.js';
import BB690Model from '../models/BB690Model.js';
import CC125Model from '../models/CC125Model.js';
import CC168Model from '../models/CC168Model.js';

const mongoURI = 'mongodb://127.0.0.1:27017/energy-resources';

// Подключение к MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Подключено к MongoDB');
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error);
  }
};

// Маппинг моделей
export const modelsMap = {
  k301: k301model,
  k302: k302Model,
  BB551: BB551Model,
  BB690: BB690Model,
  CC125: CC125Model,
  CC168: CC168Model,
};

// Функция для сохранения данных в базу
export const saveDataToDB = async (deviceName, data) => {
  try {
    const Model = modelsMap[deviceName];
    if (!Model) {
      throw new Error(`Модель для устройства ${deviceName} не найдена`);
    }

    const deviceConfig = deviceConfigs[deviceName];

    const record = new Model({
      deviceInfo: {
        deviceName: deviceConfig.deviceName,
        port: deviceConfig.port,
        baudRate: deviceConfig.baudRate,
        slaveId: deviceConfig.slaveId,
      },
      data,
    });

    await record.save();
    console.log(`Данные устройства ${deviceName} сохранены в MongoDB`);
  } catch (error) {
    console.error(`Ошибка при сохранении данных устройства ${deviceName}:`, error);
  }
};
