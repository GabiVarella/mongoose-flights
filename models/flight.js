const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema ({
    airport: {
        type: String,
        require: true,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "LAX"
    },
    arrival: {
        type: Date
    }
}, {
    timestamps:true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ["American", "Southwest", "United"]
    },
    airport: {
        type: String,
        require: true,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },

    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },

    departs: {
        type: Date
        
    },
    destinations: [destinationSchema]

  }, {
      timestamps: true
  });


module.exports = mongoose.model('Flight', flightSchema);
