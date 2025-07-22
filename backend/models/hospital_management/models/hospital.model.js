import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    },
    location: {
    type: String,
    required: true
    },
    capacity: {
    type: Number,
    required: true
    },
    contactNumber: {
    type: String,   
    required: true
    
  },
    specializations: [{
    type: String,
    required: true
    }],
}, {timestamps: true});

export const Hospital = mongoose.model('Hospital', hospitalSchema);
