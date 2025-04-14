import { SerialPort } from 'serialport';
import ModbusRTU from 'modbus-serial';


// Функция для подключения к устройству
export  const  connectToModbus = async (config) => {
  const client = new ModbusRTU();

  try {
    await client.connectRTUBuffered(config.port, { baudRate: config.baudRate });
    console.log(`Подключено к ${config.port} с baudRate=${config.baudRate}`);
    client.setID(config.slaveId);
    return client;
  } catch (err) {
    console.error('Ошибка подключения к COM-порту:', err);
    throw err;
  }
}

// Функция для чтения регистров
export  const readRegister = async (client, address) => {
  try {
    const response = await client.readInputRegisters(address, 2); // Читаем 2 регистра (float)
    return bufferToFloat(response.buffer); // Преобразуем байты в float
  } catch (err) {
    console.error(`Ошибка чтения регистра 0x${address.toString(16)}:`, err);
    throw err;
  }
}

// Функция для преобразования байтов в float
const  bufferToFloat = (buffer) => {
  try {
    // Используем правильный порядок байтов (без изменений)
    const bytes = Buffer.from([buffer[0], buffer[1], buffer[2], buffer[3]]);
    return bytes.readFloatBE(0); // Преобразуем в float
  } catch (err) {
    console.error('Ошибка при преобразовании байтов в float:', err);
    throw err;
  }
}