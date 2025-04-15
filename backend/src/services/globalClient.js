import { comPortManager } from './modbus/comPortManager.js';

export const pollDevicesWithSharedConnection = () => {
  comPortManager.startPolling();
};

// Для остановки опроса (если нужно)
export const stopPolling = () => {
  comPortManager.stopPolling();
};