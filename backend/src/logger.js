import winston from 'winston';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import DailyRotateFile from 'winston-daily-rotate-file';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const loggerFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Создаем логгер
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    loggerFormat,
  ),
  transports: [
    new DailyRotateFile({
      filename: path.join(logsDir, 'error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      level: 'error', // Записываем только ошибки
      zippedArchive: false, // Можно установить в true, если хотите архивировать старые логи
      maxSize: '20m', // Максимальный размер файла лога
      maxFiles: '7d', // Хранить логи за последние 7 дней
    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({ format: 'HH:mm:ss' }),
        winston.format.printf(({ level, message, timestamp }) => {
          if (level === 'error') {
            return `[${timestamp}] Ошибка записана в лог.`;
          }
          return message;
        }),
      ),
    }),
  ],
});

const errorCache = {};
const ERROR_CACHE_DURATION = 15000;
const originalLoggerError = logger.error.bind(logger);

logger.error = (message) => {
  const now = Date.now();
  const cacheKey = message;

  if (!errorCache[cacheKey] || now - errorCache[cacheKey] > ERROR_CACHE_DURATION) {
    errorCache[cacheKey] = now;
    originalLoggerError(message);
  } else {
    console.log('Повторная ошибка не записана в лог.');
  }

};

export default logger;
