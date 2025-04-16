import { modelsMap } from './dataBase.js';

// Функция для инициализации Socket.IO
// services/socket.js
export const initSocket = (io) => {
  // Обработка подключения клиента
  io.on('connection', (socket) => {
    console.log('Клиент подключен');

    // Функция для отправки данных
    const sendData = async () => {
      try {
        const latestK301 = await modelsMap.k301.findOne().sort({ timestamp: -1 });
        const latestK302 = await modelsMap.k302.findOne().sort({ timestamp: -1 });
        const latestBB551 = await modelsMap.BB551.findOne().sort({ timestamp: -1 });
        const latestBB690 = await modelsMap.BB690.findOne().sort({ timestamp: -1 });
        const latestCC125 = await modelsMap.CC125.findOne().sort({ timestamp: -1 });
        const latestCC168 = await modelsMap.CC168.findOne().sort({ timestamp: -1 });
        const latestBB93 = await modelsMap.BB93.findOne().sort({ timestamp: -1 });

        socket.emit('deviceData', {
          k301: latestK301?.data,
          k302: latestK302?.data,
          BB551: latestBB551?.data,
          BB690: latestBB690?.data,
          CC125: latestCC125?.data,
          CC168: latestCC168?.data,
          BB93: latestBB93?.data,
        });
      } catch (error) {
        console.error('Ошибка при получении данных из базы:', error);
      }
    };

    // Отправляем данные сразу при подключении
    sendData();

    // Устанавливаем интервал для отправки данных каждые 5 секунд
    const intervalId = setInterval(sendData, 5000);

    // Очищаем интервал при отключении клиента
    socket.on('disconnect', () => {
      clearInterval(intervalId);
      console.log('Клиент отключен');
    });
  });
};
