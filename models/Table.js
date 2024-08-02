const mongoose =  require('mongoose');

const tableSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    tableNumber: {
        type: Number,
        require: true,
        unique: true // Ensures uniqueness of table numbers
    },
    capacity: {
        type: Number,
        require: true
    },
    description: {
        type:String,
        require: true
    },
    status: { 
        type: String, 
        enum: ['Available', 'Occupied', 'Reserved'], 
        default: 'Available' 
    },
    
},{timeStamp: true}
);

const Tables = mongoose.model("Tables",tableSchema);
module.exports = Tables
