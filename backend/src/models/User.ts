import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['driver', 'company'],
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  totalTrips: {
    type: Number,
    default: 0
  },
  monthlyEarnings: {
    type: Number,
    default: 0
  },
  activeJobId: {
    type: String,
    default: null
  },
  documents: [{
    type: {
      type: String,
      enum: ['license', 'src', 'insurance', 'other']
    },
    url: String,
    verified: {
      type: Boolean,
      default: false
    }
  }],
  profileImage: String,
  status: {
    type: String,
    enum: ['available', 'busy', 'offline'],
    default: 'offline'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);


