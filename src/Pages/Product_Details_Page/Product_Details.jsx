import { useContext } from "react";
import { ShopContext } from "../../Context/Context";

function Product_Details() {
  const { setAddToCart, addToCart, favorite, setFavorite, product } = useContext(ShopContext);

  // Check if the product is already in the favorites list
  const favoriteExist = favorite.find((item) => item.id === product?.id);

  // Handle Add to Favorites
  const favoriteHandler = () => {
    if (!favoriteExist) {
      setFavorite([...favorite, product]);
    }
  };

  // Check if the product is already in the cart
  const cartExist = addToCart.find((item) => item.id === product?.id);

  // Handle Add to Cart
  const addToCartHandler = () => {
    if (!cartExist) {
      setAddToCart([...addToCart, product]);
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Thumbnails */}
        <div className="flex flex-row lg:flex-col items-center justify-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-4">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={product?.image}
              alt={`Product thumbnail ${index + 1}`}
              className="object-cover w-20 h-20 lg:w-24 lg:h-24 rounded-lg border border-gray-300 hover:shadow-lg transition-all"
            />
          ))}
        </div>

        {/* Main Product Image */}
        <div className="flex justify-center lg:flex-1">
          <img
            src={product?.image}
            alt="Main product image"
            className="object-cover w-full max-w-md lg:max-w-lg rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="lg:flex-1">
          {/* Category */}
          <div className="mb-2 text-sm text-gray-500">
            <a href="#" className="hover:underline">{product?.category}</a>
          </div>

          {/* Product Title */}
          <h1 className="mb-4 text-2xl font-bold text-gray-800">{product?.title}</h1>

          {/* Ratings */}
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-500 space-x-1">
              {[...Array(4)].map((_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}
              <i className="text-gray-300 fas fa-star"></i>
            </div>
            <span className="ml-2 text-sm text-gray-500">(150 Reviews)</span>
          </div>

          {/* Stock Status */}
          <div className="mb-4 text-lg font-medium text-green-500">In Stock</div>

          {/* Price */}
          <div className="mb-6 text-2xl font-bold text-gray-800">${product?.price || "192.00"}</div>

          {/* Description */}
          <p className="mb-6 text-gray-600">{product?.description}</p>

          {/* Colors */}
          <div className="mb-6">
            <span className="font-bold text-gray-700">Colors:</span>
            <div className="flex items-center mt-2 space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-300 hover:border-black transition-all"></div>
              <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-gray-300 hover:border-black transition-all"></div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <span className="font-bold text-gray-700">Size:</span>
            <div className="flex items-center mt-2 space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center mb-6 space-x-4">
            <button
              className={`px-6 py-2 text-white rounded-lg transition-all ${
                cartExist ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={addToCartHandler}
              disabled={cartExist}
            >
              {cartExist ? "Already in Cart" : "Add to Cart"}
            </button>
           
            <button
              className={`px-6 py-2 text-white rounded-lg transition-all ${
                favoriteExist ? "bg-gray-500 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
              }`}
              onClick={favoriteHandler}
              disabled={favoriteExist}
            >
              {favoriteExist ? "Favorited" : "Add to Favorites"}
            </button>
          </div>

          {/* Delivery & Returns */}
          <div className="py-6 border-t border-b border-gray-300">
            <div className="flex items-center mb-4">
              <i className="mr-2 text-gray-500 fas fa-truck"></i>
              <span className="text-gray-700">Free Delivery</span>
              <a href="#" className="ml-2 text-blue-500 hover:underline">
                Enter your postal code for Delivery Availability
              </a>
            </div>
            <div className="flex items-center">
              <i className="mr-2 text-gray-500 fas fa-undo"></i>
              <span className="text-gray-700">Free 30 Days Returns</span>
              <a href="#" className="ml-2 text-blue-500 hover:underline">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Details;
