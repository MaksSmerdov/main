import express from 'express';
import { fetchConfigs } from '../services/fetchConfig.js';
import { EnergyResources } from '../models/carbonModels.js';

const router = express.Router();

fetchConfigs.forEach(({ apiRoute, model }) => {
  router.get(apiRoute, async (req, res) => {
    const { start, end } = req.query;
    const filter = {};

    if (start || end) {
      filter.lastUpdated = {};
      if (start) filter.lastUpdated.$gte = new Date(start);
      if (end) filter.lastUpdated.$lte = new Date(end);
    }

    try {
      const docs = await model.find(filter).sort({ lastUpdated: 1 }).lean();
      res.json(docs);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
});

router.get('/uzliUchetaCarbon/:deviceId', async (req, res) => {
  const deviceId = req.params.deviceId;
  const { start, end } = req.query;
  const filter = {};

  if (start || end) {
    filter.lastUpdated = {};
    if (start) filter.lastUpdated.$gte = new Date(start);
    if (end) filter.lastUpdated.$lte = new Date(end);
  }

  try {
    const snapshots = await EnergyResources.find(filter).sort({ lastUpdated: 1 }).lean().exec();

    const history = snapshots.map(snapshot => {
      const node = snapshot[deviceId];
      if (!node) return null;
      return {
        data: node.data,
        lastUpdated: snapshot.lastUpdated,
        outdated: node.outdated,
      };
    }).filter(item => item !== null);

    if (history.length === 0) {
      return res.status(404).json({ error: 'Нет данных для этого устройства' });
    }

    res.json(history);
  } catch (err) {
    console.error('Ошибка в /uzliUchetaCarbon/:deviceId:', err);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

export default router;
