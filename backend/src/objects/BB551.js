import { readRegister } from '../services/modbusSerial.js';
import { deviceConfigs } from '../services/deviceConfig.js';
import { saveDataToDB } from '../services/dataBase.js';

export const pollBB551 = async (client) => {
  try {
    client.setID(deviceConfigs.BB551.slaveId);

    const data = {
      wt1: parseFloat((await readRegister(client, deviceConfigs.BB551.registers.wt1)).toFixed(2)),
      p1: parseFloat((await readRegister(client, deviceConfigs.BB551.registers.p1)).toFixed(2)),
      qo1: parseFloat((await readRegister(client, deviceConfigs.BB551.registers.qo1)).toFixed(2)),
      qm1: parseFloat((await readRegister(client, deviceConfigs.BB551.registers.qm1)).toFixed(2)),
      wtAccumulated: parseFloat((await readRegister(client, deviceConfigs.BB551.registers.wtAccumulated)).toFixed(2)),
      wpAccumulated: parseFloat((await readRegister(client, deviceConfigs.BB551.registers.wpAccumulated)).toFixed(2)),
      wtFlow: parseFloat((await readRegister(client, deviceConfigs.BB551.registers.wtFlow)).toFixed(2)),
      wpFlow: parseFloat((await readRegister(client, deviceConfigs.BB551.registers.wpFlow)).toFixed(2)),
      error: null,
    };

    console.log('Данные устройства BB551:');
    console.table(data);

    await saveDataToDB('BB551', data);
  } catch (err) {
    console.error('Ошибка при опросе устройства BB551:', err.message);

    // Создаем запись с пустыми данными и отметкой об ошибке
    const errorData = {
      wt1: null,
      p1: null,
      qo1: null,
      qm1: null,
      wtAccumulated: null,
      wpAccumulated: null,
      wtFlow: null,
      wpFlow: null,
      error: 'Device not responding', 
    };

    await saveDataToDB('BB551', errorData);
  }
};
