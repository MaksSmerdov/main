
import { pollK301 } from '../objects/k301.js';
import { pollK302 } from '../objects/k302.js';
import { deviceConfigs } from './deviceConfig.js';
import { connectToModbus } from './modbusSerial.js';


let globalClient;

// Функция для инициализации глобального клиента
const initializeGlobalClient = async () => {
  if (!globalClient) {
    try {
      globalClient = await connectToModbus(deviceConfigs.k301); // Используем конфигурацию одного из устройств
      console.log('Глобальное подключение к COM-порту установлено');
    } catch (err) {
      console.error('Ошибка при установке глобального подключения:', err);
    }
  }
};

// Функция для опроса устройств с общим подключением
export const pollDevicesWithSharedConnection = async () => {
  try {
    await initializeGlobalClient();

    if (globalClient) {
      // Опрос устройств по очереди
      await pollK301(globalClient);
      await pollK302(globalClient);
    }
  } catch (err) {
    console.error('Ошибка при опросе устройств:', err);
  }

  // Повторяем цикл через 5 секунд
  setTimeout(pollDevicesWithSharedConnection, 3000);
};

// Запускаем опрос с общим подключением
pollDevicesWithSharedConnection();