import { com11Client } from './com11Client.js';
import { com12Client } from './com12Client.js';
import { saveDataToDB } from '../dataBase.js';

export class ComPortManager {
  constructor() {
    this.clients = [com11Client, com12Client];
    this.pollInterval = 5000; // Опрос устройств каждые 5 сек
    this.saveInterval = 60000; // Запись в БД каждую минуту
    this.lastSaveTime = Date.now();
    this.timeoutId = null;
  }

  async pollAll() {
    try {
      // Опрашиваем все устройства
      for (const client of this.clients) {
        await client.poll();
      }

      // Проверяем нужно ли сохранять в БД
      const now = Date.now();
      if (now - this.lastSaveTime >= this.saveInterval) {
        this.lastSaveTime = now;
        await this.saveAllData();
      }
    } catch (err) {
      console.error('Ошибка при опросе устройств:', err);
    } finally {
      this.scheduleNextPoll();
    }
  }

  async saveAllData() {
    try {
      const deviceNames = ['k301', 'k302', 'BB551', 'BB93', 'BB690', 'CC125', 'CC168'];

      for (const deviceName of deviceNames) {
        await saveDataToDB(deviceName);
      }

      console.log('Все данные сохранены в БД');
    } catch (error) {
      console.error('Ошибка при сохранении данных:', error);
    }
  }

  scheduleNextPoll() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.pollAll(), this.pollInterval);
  }

  startPolling() {
    console.log('Запуск опроса устройств...');
    this.pollAll();
  }

  stopPolling() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    console.log('Опрос устройств остановлен');
  }
}

export const comPortManager = new ComPortManager();