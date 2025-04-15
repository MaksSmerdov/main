import { readRegister } from '../services/modbusSerial.js';
import { deviceConfigs } from '../services/deviceConfig.js';
import { saveDataToDB } from '../services/dataBase.js';

export const pollBB690 = async (client) => {
  try {
    client.setID(deviceConfigs.BB690.slaveId);

    const data = {
      wt1: parseFloat((await readRegister(client, deviceConfigs.BB690.registers.wt1)).toFixed(2)),
      t1: parseFloat((await readRegister(client, deviceConfigs.BB690.registers.t1)).toFixed(2)),
      p1: parseFloat((await readRegister(client, deviceConfigs.BB690.registers.p1)).toFixed(2)),
      qo1: parseFloat((await readRegister(client, deviceConfigs.BB690.registers.qo1)).toFixed(2)),
      qm1: parseFloat((await readRegister(client, deviceConfigs.BB690.registers.qm1)).toFixed(2)),
      error: null, // Устройство доступно, ошибки нет
    };

    console.log('Данные устройства BB690 (УП карбонизация пар):');
    console.table(data);

    await saveDataToDB('BB690', data);
  } catch (err) {
    console.error('Ошибка при опросе устройства BB690:', err.message);

    // Создаем запись с пустыми данными и отметкой об ошибке
    const errorData = {
      wt1: null,
      t1: null,
      p1: null,
      qo1: null,
      qm1: null,
      error: 'Device not responding', // Сообщение об ошибке
    };

    await saveDataToDB('BB690', errorData);
  }
};
