import { modelsMap } from "./dataBase.js";



// Функция для инициализации Socket.IO
export const initSocket = (io) => {
  // Обработка подключения клиента
  io.on('connection', (socket) => {
    console.log('Клиент подключен');

    // Отправка последних данных при подключении
    socket.emit('requestData');
  });

  // Периодическая отправка данных всем клиентам
  setInterval(async () => {
    try {
      const latestK301 = await modelsMap.k301.findOne().sort({ timestamp: -1 });
      const latestK302 = await modelsMap.k302.findOne().sort({ timestamp: -1 });

      io.emit('deviceData', {
        k301: latestK301?.data,
        k302: latestK302?.data,
      });
    } catch (error) {
      console.error('Ошибка при получении данных из базы:', error);
    }
  }, 10000); // Отправляем данные каждые 10 секунд
};