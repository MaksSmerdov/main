import { readRegister } from '../services/modbusSerial.js';
import { deviceConfigs } from '../services/deviceConfig.js';
import { saveDataToDB } from '../services/dataBase.js';

export const pollCC125 = async (client) => {
  try {
    client.setID(deviceConfigs.CC125.slaveId);

    const data = {
      k295a_du50_flow: parseFloat(
        (await readRegister(client, deviceConfigs.CC125.registers.k295a_du50_flow)).toFixed(2)
      ),
      k295a_du50_accumulated: parseFloat(
        (await readRegister(client, deviceConfigs.CC125.registers.k295a_du50_accumulated)).toFixed(2)
      ),
      k295_du32_flow: parseFloat((await readRegister(client, deviceConfigs.CC125.registers.k295_du32_flow)).toFixed(2)),
      k295_du32_accumulated: parseFloat(
        (await readRegister(client, deviceConfigs.CC125.registers.k295_du32_accumulated)).toFixed(2)
      ),
      k296a_du25_flow: parseFloat(
        (await readRegister(client, deviceConfigs.CC125.registers.k296a_du25_flow)).toFixed(2)
      ),
      k296a_du25_accumulated: parseFloat(
        (await readRegister(client, deviceConfigs.CC125.registers.k296a_du25_accumulated)).toFixed(2)
      ),
      k295a_du15_flow: parseFloat(
        (await readRegister(client, deviceConfigs.CC125.registers.k295a_du15_flow)).toFixed(2)
      ),
      k295a_du15_accumulated: parseFloat(
        (await readRegister(client, deviceConfigs.CC125.registers.k295a_du15_accumulated)).toFixed(2)
      ),
      error: null, // Устройство доступно, ошибки нет
    };

    console.log('Данные устройства CC125 (к295а/296а/295):');
    console.table(data);

    await saveDataToDB('CC125', data);
  } catch (err) {
    console.error('Ошибка при опросе устройства CC125:', err.message);

    // Создаем запись с пустыми данными и отметкой об ошибке
    const errorData = {
      k295a_du50_flow: null,
      k295a_du50_accumulated: null,
      k295_du32_flow: null,
      k295_du32_accumulated: null,
      k296a_du25_flow: null,
      k296a_du25_accumulated: null,
      k295a_du15_flow: null,
      k295a_du15_accumulated: null,
      error: 'Device not responding', // Сообщение об ошибке
    };

    await saveDataToDB('CC125', errorData);
  }
};
