import { com11Client } from './com11Client.js';
import { com12Client } from './com12Client.js';

export class ComPortManager {
  constructor() {
    this.clients = [com11Client, com12Client];
    this.pollInterval = 5000;
    this.timeoutId = null;
  }

  async pollAll() {
    try {
      for (const client of this.clients) {
        await client.poll();
      }
    } catch (err) {
      console.error('Ошибка при опросе устройств:', err);
    } finally {
      this.scheduleNextPoll();
    }
  }

  scheduleNextPoll() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.pollAll(), this.pollInterval);
  }

  startPolling() {
    this.pollAll();
  }

  stopPolling() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }
}

export const comPortManager = new ComPortManager();