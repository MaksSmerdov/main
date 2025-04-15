import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { initSocket } from './services/socket.js';
import { pollDevicesWithSharedConnection } from './services/globalClient.js';
import { connectDB } from './services/dataBase.js';

// Создаем экземпляр приложения
const app = express();

// Обслуживание статических файлов из папки public
app.use(express.static('public'));

// Создаем HTTP-сервер
const server = createServer(app);

// Инициализируем Socket.IO
const io = new Server(server);

// Подключение к MongoDB
connectDB();

// Инициализация Socket.IO
initSocket(io);

// Запускаем сервер
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);

  // Запуск опроса
  pollDevicesWithSharedConnection();
});
