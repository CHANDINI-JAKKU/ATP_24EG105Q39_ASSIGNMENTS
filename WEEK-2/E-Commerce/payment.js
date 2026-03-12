import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod'];
  return validMethods.includes(method.toLowerCase());
}
export function processPayment(paymentMethod, couponCode = null) {
  const cartItems = getCartItems();
  const subtotal = getCartTotal();
  if (cartItems.length === 0) {
    return { status: "failed", message: "Cart is empty" };
  }
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }
  const discountDetails = applyDiscount(subtotal, couponCode, cartItems);
  const { discount, finalTotal } = discountDetails;
  // Simulate payment success
  const paymentSuccess = true;
  if (!paymentSuccess) {
    return { status: "failed", message: "Payment failed" };
  }
  // Reduce stock
  cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });
  clearCart();
  return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal,
    discount,
    total: finalTotal,
    paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}
function generateOrderId() {
  return 'ORD' + Date.now();
}