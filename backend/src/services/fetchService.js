import logger from '../logger.js';

export async function fetchData ({ url, model, name }) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Bad response ${resp.status}`);

    const raw = await resp.json();
    const { _id, id, ...data } = raw;
    await model.create({ ...data, lastUpdated: new Date() });
    // console.log(`[${name}] Данные получены: ${url}`);
  } catch (err) {
    logger.error(`[${name}] Ошибка соединения`, err.message);
  }
}

export async function fetchAll (configs) {
  await Promise.all(configs.map(cfg => fetchData(cfg)));
}
