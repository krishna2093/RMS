const Items = require('../models/itemModel');
const Cart = require('../models/CartModel');


// get all item in cart
const getCart = async(req,res) => {
    try {
        // Find the cart
        const cart = await Cart.findOne().populate('items');
    
        if (!cart) {
          return res.status(404).json({ error: 'Cart not found' });
        }
    
        res.json(cart);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}


// add items in cart 
const addCart = async (req, res) => {
    try {
      const { items } = req.body;
  
      // Check if the items array is provided and is an array
      if (!Array.isArray(items)) {
        return res.status(400).json({ error: 'Invalid items format' });
      }
  
      // Initialize an array to hold item objects
      const itemsToAdd = [];
  
      // Iterate over each item ID in the array
      for (const itemId of items) {
        // Check if the item exists
        const item = await Items.findById(itemId);
        if (!item) {
          return res.status(404).json({ error: `Item with ID ${itemId} not found` });
        }
  
        // Add the item to the itemsToAdd array
        itemsToAdd.push(item);
      }
  
      // Calculate total price
      const total = itemsToAdd.reduce((acc, curr) => acc + curr.price, 0);
  
      // Create a new cart
      const cart = new Cart({
        items: itemsToAdd.map(item => item._id), // Extract item IDs
        total
      });
  
      // Save the cart
      await cart.save();
  
      res.status(201).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // delete items from the cart 
  const deletecartitem = async (req,res) => {
    try {
        const itemId = req.params.itemId;
    
        // Find the cart
        const cart = await Cart.findOne();
    
        if (!cart) {
          return res.status(404).json({ error: 'Cart not found' });
        }
    
        // Remove the item from the cart
        cart.items = cart.items.filter(id => id.toString() !== itemId);
        
        // Update the total price
        const item = await Items.findById(itemId);
        cart.total -= item.price;
    
        // Save the updated cart
        await cart.save();
    
        res.json(cart);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

    const deleteCart = async (req, res) => {
        try {
          // Extract cart ID from request parameters
          const { cartId } = req.params;
      
          // Find the cart by ID
          const cart = await Cart.findById(cartId);
      
          // Check if the cart exists
          if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
          }
      
          // Check if cart items exist and are not null
          if (!cart.items || cart.items.length === 0) {
            return res.status(400).json({ error: 'Cart items not found or empty' });
          }
      
          // Delete the cart
          await Cart.findByIdAndDelete(cartId);
      
          // Return success response
          return res.status(200).json({ message: 'Cart deleted successfully' });
        } catch (error) {
          // Handle errors
          return res.status(500).json({ error: error.message });
        }
      };
      
      
      
      
      

  

module.exports = {getCart, addCart,deletecartitem,deleteCart}