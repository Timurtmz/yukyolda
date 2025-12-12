import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: Date,
  actualDistance: Number,
  estimatedDistance: Number,
  estimatedDuration: Number, // dakika cinsinden
  status: {
    type: String,
    enum: ['in_progress', 'completed', 'cancelled'],
    default: 'in_progress'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  ratingComment: String,
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  paymentAmount: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Trip', tripSchema);


