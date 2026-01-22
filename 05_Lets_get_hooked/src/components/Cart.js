import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Your Cart
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Cart Items Section */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Cart Items ({cartItems.length})
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Your cart is empty 🛒
            </p>
          ) : (
            cartItems.map((cartItem, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-4 last:border-none"
              >
                <div>
                  <h3 className="font-medium text-lg">
                    {cartItem.info.name}
                  </h3>
                  <p className="text-gray-600">
                    ₹{cartItem.info.price / 100}
                  </p>
                </div>

                <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                  Qty: 1
                </span>
              </div>
            ))
          )}
        </div>

        {/* Price Summary Section */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">
            Price Details
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Items Total</span>
              <span>₹476</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span>₹516</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
