// objects/BB93.js
import { readRegister } from '../services/modbusSerial.js';
import { deviceConfigs } from '../services/deviceConfig.js';
import { saveDataToDB } from '../services/dataBase.js';

export const pollBB93 = async (client) => {
  try {
      client.setID(deviceConfigs.BB93.slaveId);
      const data = {
          wt1: parseFloat((await readRegister(client, deviceConfigs.BB93.registers.wt1)).toFixed(2)),
          p1: parseFloat((await readRegister(client, deviceConfigs.BB93.registers.p1)).toFixed(2)),
          qo1: parseFloat((await readRegister(client, deviceConfigs.BB93.registers.qo1)).toFixed(2)),
          qm1: parseFloat((await readRegister(client, deviceConfigs.BB93.registers.qm1)).toFixed(2)),
          wtAccumulated: parseFloat((await readRegister(client, deviceConfigs.BB93.registers.wtAccumulated)).toFixed(2)),
          wpAccumulated: parseFloat((await readRegister(client, deviceConfigs.BB93.registers.wpAccumulated)).toFixed(2)),
          wtFlow: parseFloat((await readRegister(client, deviceConfigs.BB93.registers.wtFlow)).toFixed(2)),
          wpFlow: parseFloat((await readRegister(client, deviceConfigs.BB93.registers.wpFlow)).toFixed(2)),
      };
      console.log('Данные устройства BB93:');
      console.table(data);
      await saveDataToDB('BB93', data);
  } catch (err) {
      console.error('Ошибка при опросе устройства BB93:', err.message);
      const errorData = {
          wt1: null,
          p1: null,
          qo1: null,
          qm1: null,
          wtAccumulated: null,
          wpAccumulated: null,
          wtFlow: null,
          wpFlow: null,
          error: 'Device not responding'
      };
      await saveDataToDB('BB93', errorData);
  }
};