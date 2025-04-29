import express from 'express';
import { fetchConfigs } from '../services/fetchConfig.js';

const router = express.Router();

fetchConfigs.forEach(({ apiRoute, model, name }) => {
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

export default router;
