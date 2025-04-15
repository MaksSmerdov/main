// objects/CC168.js
import { readRegister } from '../services/modbusSerial.js';
import { deviceConfigs } from '../services/deviceConfig.js';
import { saveDataToDB } from '../services/dataBase.js';

export const pollCC168 = async (client) => {
  try {
    client.setID(deviceConfigs.CC168.slaveId);

    const data = {
      k295_du20_accumulated: parseFloat((await readRegister(client, deviceConfigs.CC168.registers.k295_du20_accumulated)).toFixed(2)),
      k295_du50_accumulated: parseFloat((await readRegister(client, deviceConfigs.CC168.registers.k295_du50_accumulated)).toFixed(2)),
    };

    console.log('Данные устройства CC168 (к295 вода питьевая):');
    console.table(data);

    await saveDataToDB('CC168', data);
  } catch (err) {
    console.error('Ошибка при опросе устройства CC168:', err);
  }
};