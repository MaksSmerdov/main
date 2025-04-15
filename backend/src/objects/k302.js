import { readRegister } from '../services/modbusSerial.js';
import { deviceConfigs } from '../services/deviceConfig.js';
import { saveDataToDB } from '../services/dataBase.js';

// Функция для опроса устройства k302
export const pollK302 = async (client) => {
  try {
    // Устанавливаем ID устройства
    client.setID(deviceConfigs.k302.slaveId);

    // Опрос регистров
    const data = {
      qt1: parseFloat((await readRegister(client, deviceConfigs.k302.registers.qt1)).toFixed(2)),
      wt1: parseFloat((await readRegister(client, deviceConfigs.k302.registers.wt1)).toFixed(2)),
      qo1: parseFloat((await readRegister(client, deviceConfigs.k302.registers.qo1)).toFixed(2)),
      qo2: parseFloat((await readRegister(client, deviceConfigs.k302.registers.qo2)).toFixed(2)),
      t1: parseFloat((await readRegister(client, deviceConfigs.k302.registers.t1)).toFixed(2)),
      t2: parseFloat((await readRegister(client, deviceConfigs.k302.registers.t2)).toFixed(2)),
      p1: parseFloat((await readRegister(client, deviceConfigs.k302.registers.p1)).toFixed(2)),
      p2: parseFloat((await readRegister(client, deviceConfigs.k302.registers.p2)).toFixed(2)),
      qm1: parseFloat((await readRegister(client, deviceConfigs.k302.registers.qm1)).toFixed(2)),
      qm2: parseFloat((await readRegister(client, deviceConfigs.k302.registers.qm2)).toFixed(2)),
      error: null, // Устройство доступно, ошибки нет
    };

    // Вывод данных в консоль
    console.log('Данные устройства k302:');
    console.table(data);

    // Запись данных в базу
    await saveDataToDB('k302', data);
  } catch (err) {
    console.error('Ошибка при опросе устройства k302:', err.message);

    // Создаем запись с пустыми данными и отметкой об ошибке
    const errorData = {
      qt1: null,
      wt1: null,
      qo1: null,
      qo2: null,
      t1: null,
      t2: null,
      p1: null,
      p2: null,
      qm1: null,
      qm2: null,
      error: 'Device not responding', // Сообщение об ошибке
    };

    await saveDataToDB('k302', errorData);
  }
};
