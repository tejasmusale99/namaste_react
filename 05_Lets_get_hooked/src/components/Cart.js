import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearClickHandler = () => {
    dispatch(clearCart());
  };

  // ✅ Calculate totals dynamically
  const itemsTotal = cartItems.reduce((acc, item) => acc + item.info.price / 100, 0);
  const deliveryFee = cartItems.length > 0 ? 40 : 0; // Only charge delivery if cart has items
  const totalAmount = itemsTotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Page Title + Clear Cart Button */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>

        <button
          className="border bg-orange-500 text-white px-4 py-2 rounded-lg
                     hover:bg-orange-500 transition cursor-pointer"
          onClick={clearClickHandler}
        >
          Clear Cart
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Cart Items ({cartItems.length})
          </h2>

          {cartItems.length === 0 && <h1>Your Cart is empty</h1>}

          {cartItems.map((cartItem, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-4 last:border-none"
            >
              <div>
                <h3 className="font-medium text-lg">{cartItem.info.name}</h3>
                <p className="text-gray-600">₹{cartItem.info.price / 100}</p>
              </div>

              <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                Qty: 1
              </span>
            </div>
          ))}
        </div>

        {/* Price Summary Section */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Price Details</h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Items Total</span>
              <span>₹{itemsTotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
