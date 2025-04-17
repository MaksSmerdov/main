import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.static('public'));

/* ---------- 1. MongoDB ---------- */
await mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/telemetry',
);
console.log('✅ MongoDB connected');

/* ---------- 2. Модель ---------- */
const vr1Schema = new mongoose.Schema(
  {
    lastUpdated: { type: Date, default: Date.now, index: true },
  },
  {
    /** разрешаем любые дополнительные поля верхнего уровня */
    strict: false,
    versionKey: false,
    collection: 'vr1_readings',
  },
);

const Vr1 = mongoose.model('Vr1', vr1Schema);

async function syncVr1 () {
  try {
    const resp = await fetch('http://169.254.0.156:3002/api/vr1-data');
    if (!resp.ok) throw new Error(`Bad response ${resp.status}`);

    const raw = await resp.json();

    /*  ------ очистка лишнего _id из payload ------ */
    const { _id, id, ...data } = raw;   // бывают варианты: _id, id

    /*  ------ запись ------ */
    await Vr1.create({ ...data, lastUpdated: new Date() });

    console.log('⬇️  VR1 synced', new Date().toISOString());
  } catch (err) {
    console.error('⚠️  Sync failed:', err.message);
  }
}

syncVr1();
setInterval(syncVr1, 60_000);

app.get('/vr1', async (req, res) => {
  try {
    const { start, end } = req.query;
    const filter = {};

    if (start || end) {
      filter.lastUpdated = {};
      if (start) filter.lastUpdated.$gte = new Date(start);
      if (end) filter.lastUpdated.$lte = new Date(end);
    }

    const docs = await Vr1.find(filter).sort({ lastUpdated: 1 }).lean();
    res.json(docs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.get('/api/server-time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

/* ---------- 5. Запуск ---------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server ready: http://localhost:${PORT}`),
);
