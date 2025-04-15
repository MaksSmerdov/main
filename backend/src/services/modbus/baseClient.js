import { connectToModbus } from '../modbusSerial.js';

export class BaseComClient {
  constructor(portConfig) {
    this.portConfig = portConfig;
    this.client = null;
  }

  async initialize() {
    try {
      if (!this.client) {
        this.client = await connectToModbus(this.portConfig);
        console.log(`Подключение к ${this.portConfig.port} установлено`);
      }
      return this.client;
    } catch (err) {
      console.error(`Ошибка подключения к ${this.portConfig.port}:`, err);
      throw err;
    }
  }

  async pollDevices(devicePollers) {
    if (!this.client) await this.initialize();
    for (const poller of devicePollers) {
      try {
        await poller(this.client);
      } catch (err) {
        console.error(`Ошибка при опросе устройства:`, err);
        // Продолжаем опрос остальных устройств
      }
    }
  }
}
