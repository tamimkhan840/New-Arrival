import { useContext } from "react";
import { ShopContext } from "../../Context/Context";

function WishList() {
  const { favorite, setFavorite, addToCart, setAddToCart } = useContext(ShopContext);

  // Remove from Wishlist
  const removeFromFavorite = (id) => {
    setFavorite(favorite.filter((item) => item.id !== id));
  };

  // Add to Cart
  const addToCartHandler = (item) => {
    const alreadyInCart = addToCart.find((cartItem) => cartItem.id === item.id);
    if (!alreadyInCart) {
      setAddToCart([...addToCart, item]);
    }
  };

  // Move All to Bag
  const moveAllToBag = () => {
    setAddToCart([...addToCart, ...favorite]);
    setFavorite([]);
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Your Wishlist ({favorite.length})</h1>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={moveAllToBag}
        >
          Move All To Bag
        </button>
      </div>

      {favorite.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {favorite.map((item) => (
            <div key={item.id} className="p-4 border rounded shadow-sm relative">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-40 mb-4 rounded"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>

              <div className="flex justify-between mt-4">
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                  onClick={() => removeFromFavorite(item.id)}
                >
                  Remove
                </button>
                <button
                  className={`px-4 py-2 text-white rounded ${
                    addToCart.find((cartItem) => cartItem.id === item.id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  onClick={() => addToCartHandler(item)}
                  disabled={addToCart.find((cartItem) => cartItem.id === item.id)}
                >
                  {addToCart.find((cartItem) => cartItem.id === item.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishList;
