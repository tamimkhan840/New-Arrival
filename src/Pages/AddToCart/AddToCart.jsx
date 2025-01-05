import { useContext, useState } from "react";
import { ShopContext } from "../../Context/Context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const AddToCart = () => {

    const { addToCart } = useContext(ShopContext)

    const [cartItems, setCartItems] = useState([
        { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "lcd-monitor.png" },
        { id: 2, name: "HI Gamepad", price: 550, quantity: 2, image: "hi-gamepad.png" },
    ]);



    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="container px-4 py-8 mx-auto mt-20">
            <h2 className="mb-4 text-xl font-semibold">Cart</h2>
            <div className="">
                {/* Cart Items Section */}
                <div className="flex-1">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="py-2">Product</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Quantity</th>
                                <th className="py-2">Subtotal</th>
                                <th className="py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addToCart.map((item) => <CartItem key={item.id} item={item} />)}
                        </tbody>
                    </table>

                    <div className="flex flex-col gap-8 lg:flex-row">
                        <div className="w-full">
                            <div className="flex items-center justify-between mt-4">
                                <Link to={'/'} className="px-4 py-2 bg-gray-200 rounded">Return To Shop</Link>
                                <button className="px-4 py-2 bg-gray-200 rounded">Update Cart</button>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="flex-1 px-4 py-2 border rounded"
                                />
                                <button className="px-4 py-2 text-white bg-red-500 rounded">Apply Coupon</button>
                            </div>
                        </div>

                        {/* Cart Summary Section */}
                        <div className="w-full p-4 border rounded-md lg:w-1/3">
                            <h3 className="mb-4 text-lg font-semibold">Cart Total</h3>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between mb-4 text-lg font-bold">
                                <span>Total:</span>
                                <span>${subtotal}</span>
                            </div>
                            <Link to={'/billing-details'} className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddToCart;
