import mongoose from 'mongoose';
import k301model from '../models/k301model.js';
import k302Model from '../models/k302Model.js';
import { deviceConfigs } from './deviceConfig.js';

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
