import mongoose from 'mongoose';
import { carbonDb } from './database.js';

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

export const PechVr1 = carbonDb.model('PechVr1', parameterSchema);
export const PechVr2 = carbonDb.model('PechVr2', parameterSchema);
export const Sushilka1 = carbonDb.model('Sushilka1', parameterSchema);
export const Sushilka2 = carbonDb.model('Sushilka2', parameterSchema);
export const SmolReactor = carbonDb.model('SmolReactorK296', parameterSchema);
export const Melniza1 = carbonDb.model('Melniza1', parameterSchema);
export const Melniza2 = carbonDb.model('Melniza2', parameterSchema);
export const Melniza10b = carbonDb.model('Melniza10b', parameterSchema);
export const PechMpa2 = carbonDb.model('PechMpa2', parameterSchema);
export const PechMpa3 = carbonDb.model('PechMpa3', parameterSchema);
export const NotisVr1 = carbonDb.model('NotisVr1', parameterSchema);
export const NotisVr2 = carbonDb.model('NotisVr2', parameterSchema);
