// models/BB690Model.js
import mongoose from 'mongoose';

const BB690Schema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  deviceInfo: {
    deviceName: String,
    port: String,
    baudRate: Number,
    slaveId: Number
  },
  data: {
    wt1: Number, // Гкал/ч
    t1: Number,  // Температура
    p1: Number,  // Давление Мпа
    qo1: Number, // Расход м3/ч
    qm1: Number, // Расход тонн/ч
  },
});

export default mongoose.model('BB690', BB690Schema);