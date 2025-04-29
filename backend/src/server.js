import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { connectDB } from './models/database.js';
import { fetchAll } from './services/fetchService.js';
import { fetchConfigs } from './services/fetchConfig.js';
import dataRoutes from './routes/dataRoutes.js';
import logger from './logger.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.static('public'));

void connectDB();
void fetchAll(fetchConfigs);

setInterval(() => {
  void fetchAll(fetchConfigs);
}, 60000);

app.use('/api', dataRoutes);

app.get('/api/server-time', (req, res) =>
  res.json({ time: new Date().toISOString() }),
);

app.use(express.static(path.join(__dirname, '../../frontend/dist/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  logger.info(`Сервер запущен: http://localhost:${PORT}`),
);