import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  originCoords: {
    lat: Number,
    lng: Number
  },
  destinationCoords: {
    lat: Number,
    lng: Number
  },
  price: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  cargoType: {
    type: String,
    required: true
  },
  urgent: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['available', 'assigned', 'in_progress', 'completed', 'cancelled'],
    default: 'available'
  },
  assignedDriverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  startedAt: Date,
  completedAt: Date
});

export default mongoose.model('Job', jobSchema);


