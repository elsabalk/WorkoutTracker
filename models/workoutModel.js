const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutDetails = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: true
          },
          name: {
            type: String,
            trim: true,
            required: true
          },
          duration: {
            type: Number,
            required: true
          },
          weight: {
            type: Number
            required: true
          },
          reps: {
            type: Number
            required: true
          },
          sets: {
            type: Number
            required: true
          },
          distance: {
            type: Number
            required: true
          }
      }
    ]
  });
  
  const WorkoutData = mongoose.model("workout", WorkoutDetails);
  
  module.exports = WorkoutData;