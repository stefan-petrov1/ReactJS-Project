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
  address: {
    type: String,
    required: [true, 'Address is required'],
    minlength: [3, 'Address must be at least 3 characters long'],
  },
  jobPhotos: {
    type: [String],
    validate: {
      validator: function (v) {
        return (
          Array.isArray(v) &&
          v.length &&
          !v.some((x) => !x.startsWith('http') && !x.startsWith('https'))
        );
      },

      message: (props) =>
        'Photos are empty or some of them do not start with http or https',
    },
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

jobSchema.pre('validate', function (next) {
  if (isNaN(this.priceReward)) {
    this.invalidate('priceReward', 'Price reward must be a valid number');
  }

  next();
});

export const Job = mongoose.model('Job', jobSchema);
