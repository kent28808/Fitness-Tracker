const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: "Date required."
    },
    exercises: [{
        type: {
            type: String,
            required: "Exercise type is required."
        },
        name: {
            type: String,
            required: "name is required."
        },
        duration: {
            type: Number,
            required: "duration is required."
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
    }]
});

// WorkoutSchema.methods.coolifier = function() {
//   this.username = `${this.username}...the Coolest!`;
//   return this.username;
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
