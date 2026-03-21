import { getProductById, checkStock } from './product.js';
let cartItems = [];
// Add item to cart
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
if (!product) return "Product not found";
if (!checkStock(productId, quantity)) {
    return "Not enough stock available";
  }
const existingItem = cartItems.find(item => item.productId === productId);
if (existingItem) {
    const totalQuantity = existingItem.quantity + quantity;
    if (!checkStock(productId, totalQuantity)) {
      return "Not enough stock to increase quantity";
    }
    existingItem.quantity = totalQuantity;
  } else {
    cartItems.push({ productId, quantity });
  }
 return "Product added to cart successfully";
}
// Remove product from cart
export function removeFromCart(productId) {
  const index = cartItems.findIndex(item => item.productId === productId);
  if (index === -1) return "Product not found in cart";
  cartItems.splice(index, 1);
  return "Product removed from cart";
}
// Update quantity
export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(item => item.productId === productId);
  if (!item) return "Product not found in cart";

  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock available";
  }
 item.quantity = newQuantity;
  return "Quantity updated successfully";
}
// Return all cart items with product details
export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      total: product.price * item.quantity
    };
  });
}
// Calculate total price
export function getCartTotal() {
  return getCartItems().reduce((total, item) => total + item.total, 0);
}
// Clear cart
export function clearCart() {
  cartItems = [];
}