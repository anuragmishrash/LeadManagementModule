const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  source: {
    type: String,
    enum: ['Website', 'Ad', 'Referral', 'Event', 'Other', 'Social Media', 'Cold Call', 'Email Campaign'],
    default: 'Website'
  },
  notes: {
    type: String,
    trim: true
  },
  optIn: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    enum: ['New', 'Qualified', 'Converted', 'Follow-Up', 'Lost'],
    default: 'New'
  },
  qualification: {
    type: String,
    enum: ['High School', 'Bachelors', 'Masters', 'PhD', 'Other'],
    default: 'Bachelors'
  },
  interest: {
    type: String,
    enum: ['Web Development', 'Mobile Development', 'Data Science', 'Digital Marketing', 'UI/UX Design', 'Other'],
    default: 'Web Development'
  },
  assignedTo: {
    type: String,
    trim: true,
    default: 'Anurag Mishra'
  },
  city: {
    type: String,
    trim: true
  },
  passoutYear: {
    type: Number,
    min: 1950,
    max: 2030
  },
  heardFrom: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lead', leadSchema);