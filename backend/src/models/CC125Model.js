// models/CC125Model.js
import mongoose from 'mongoose';

const CC125Schema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  deviceInfo: {
    deviceName: String,
    port: String,
    baudRate: Number,
    slaveId: Number
  },
  data: {
    k295a_du50_flow: Number, // к295а питьевая ду50 м3/ч
    k295a_du50_accumulated: Number, // к295а питьевая ду50 накопл
    k295_du32_flow: Number, // к295 питьевая ду32 м3/ч
    k295_du32_accumulated: Number, // к295 питьевая ду32 накопл
    k296a_du25_flow: Number, // к296а речная ду25 м3/ч
    k296a_du25_accumulated: Number, // к296а речная ду25 накопл
    k295a_du15_flow: Number, // к295а питьевая ду15 м3/ч
    k295a_du15_accumulated: Number, // к295а питьевая ду15 накопл
  },
});

export default mongoose.model('CC125', CC125Schema);