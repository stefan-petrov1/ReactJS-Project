import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'],
  },
  priceReward: {
    type: Number,
    required: [true, 'Reward is required'],
    min: [1, 'Reward must be at least 1$'],
  },
  adress: {
    type: String,
    required: [true, 'Address is required'],
    minlength: [3, 'Address must be at least 3 characters long'],
  },
  jobPhotos: {
    type: [String],
    required: [true, 'Job photos are required'],
    validate: {
      validator: function (v) {
        return (
          Array.isArray(v) &&
          !v.some((x) => !x.startsWith('http') && !x.startsWith('https'))
        );
      },

      message: (props) => 'Photos must start with http or https',
    },
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

export const Job = mongoose.model('Job', jobSchema);
