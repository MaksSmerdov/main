import mongoose from 'mongoose';

const k302Schema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  deviceInfo: {
    deviceName: String,
    port: String,
    baudRate: Number,
    slaveId: Number
  },
  data: {
    qt1: Number, // Гкал/накопл
    wt1: Number, // Гкал/ч
    qo1: Number, // Расход прямой м3/ч
    qo2: Number, // Расход обратный м3/ч
    t1: Number, // Температура прямая
    t2: Number, // Температура обратная
    p1: Number, // Давление прямое
    p2: Number, // Давление обратное
    qm1: Number, // Расход прямой тонн/ч
    qm2: Number, // Расход обратный тонн/ч
  },
});

export default mongoose.model('K302', k302Schema);