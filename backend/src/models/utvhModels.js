import mongoose from 'mongoose';
import { utvhDb } from './database.js';

const parameterSchema = new mongoose.Schema(
  {
    lastUpdated: {
      type: Date,
      default: Date.now,
      index: { expires: '60d' },
    },
  },
  {
    strict: false,
    versionKey: false,
  },
);

// Все модели «utvh» регистрируем на utvhDb
export const Kotel1 = utvhDb.model('Kotel1', parameterSchema);
export const Kotel2 = utvhDb.model('Kotel2', parameterSchema);
export const Kotel3 = utvhDb.model('Kotel3', parameterSchema);
export const Hvo1 = utvhDb.model('Hvo1', parameterSchema);
export const Hvo2 = utvhDb.model('Hvo2', parameterSchema);
