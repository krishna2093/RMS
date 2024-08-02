const mongoose =  require('mongoose');

const cartSchema = mongoose.Schema({
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items'
    }],
    total: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Define cart model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;