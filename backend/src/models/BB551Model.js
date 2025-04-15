// models/BB551Model.js
import mongoose from 'mongoose';

const BB551Schema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  deviceInfo: {
    deviceName: String,
    port: String,
    baudRate: Number,
    slaveId: Number
  },
  data: {
    wt1: Number, // Гкал/ч
    p1: Number,  // Давление Мпа
    qo1: Number, // Расход м3/ч
    qm1: Number, // Расход тонн/ч
    wtAccumulated: Number, // Вода техническая накопл. К10б
    wpAccumulated: Number, // Вода питьевая накопл. К9а
    wtFlow: Number, // Вода техническая м3/ч К10б
    wpFlow: Number, // Вода питьевая м3/ч К9а
  },
});

export default mongoose.model('BB551', BB551Schema);