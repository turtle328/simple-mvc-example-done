const mongoose = require('mongoose');

// dog schema includes a name, breed, age, and createdDate
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  breed: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogSchema.statics.findByName = function findByName(name, cb) {
  return this.findOne({ name }, cb);
};

const DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
