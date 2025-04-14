import { connectToModbus, readRegister } from '../services/modbusSerial.js';
import { deviceConfigs } from '../services/deviceConfig.js';
import { saveDataToDB } from '../services/database.js';

// Функция для опроса устройства k301
export const pollK302 = async () => {
  let client;

  try {
    // Подключение к устройству
    client = await connectToModbus(deviceConfigs.k302);

    // Опрос регистров
    const qt1 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.qt1)).toFixed(2));
    const wt1 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.wt1)).toFixed(2));
    const qo1 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.qo1)).toFixed(2));
    const qo2 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.qo2)).toFixed(2));
    const t1 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.t1)).toFixed(2));
    const t2 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.t2)).toFixed(2));
    const p1 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.p1)).toFixed(2));
    const p2 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.p2)).toFixed(2));
    const qm1 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.qm1)).toFixed(2));
    const qm2 = parseFloat((await readRegister(client, deviceConfigs.k301.registers.qm2)).toFixed(2));

    // Вывод данных в консоль
    console.log('Данные устройства k302:');
    console.table({
      'Гкал/накопл (qt1)': qt1,
      'Гкал/ч (wt1)': wt1,
      'Расход прямой (qo1)': qo1,
      'Расход обратный (qo2)': qo2,
      'Температура прямая (t1)': t1,
      'Температура обратная (t2)': t2,
      'Давление прямое (p1)': p1,
      'Давление обратное (p2)': p2,
      'Расход прямой тонн/ч (qm1)': qm1,
      'Расход обратный тонн/ч (qm2)': qm2,
    });

    // Запись данных в базу
    await saveDataToDB('k302', {
      qt1,
      wt1,
      qo1,
      qo2,
      t1,
      t2,
      p1,
      p2,
      qm1,
      qm2,
    });
  } catch (err) {
    console.error('Ошибка при опросе устройства k302:', err);
  } finally {
    if (client) {
      client.close(() => console.log('Соединение с устройством k302 закрыто'));
    }

    // Повторяем опрос через 5 секунд
    setTimeout(pollK302, 5000);
  }
};