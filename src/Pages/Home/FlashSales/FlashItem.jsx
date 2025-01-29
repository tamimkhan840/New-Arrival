/* eslint-disable react/prop-types */
// import img from '../../../assets/Images/flash img.png'
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { useContext } from 'react';
import { ShopContext } from '../../../Context/Context';
import { Link } from 'react-router-dom';

function FlashItem({ data }) {


    const { setAddToCart, addToCart,favorite,setFavorite, setProduct} = useContext(ShopContext)

    let exist = addToCart.find(item => item.id === data.id)

    const addHandler = () => {

        if (exist === undefined) {

            setAddToCart([
                ...addToCart,
                data,
            ])
        }
    }

    let favoriteExist = favorite.find(item => item.id === data.id)

    const favoriteHandler = () => {
        if (favoriteExist === undefined) {
            setFavorite([
                ...favorite,
                data,
            ])
        }
    }
    const productHandler = (data) => {
        setProduct(data)
      };
    return (
        <div className="relative mt-10 group">
            {/* Product Card */}
            <div className="relative xl:w-[300px] lg:w-[230px] h-[250px] flex justify-center items-center bg-[#F5F5F5]">
                {/* Product Image */}
                <img className="w-3/6" src={data.image} alt={data.title} />

                {/* Discount Badge */}
                <div className="absolute flex items-center justify-center w-16 text-white rounded-lg top-3 left-3 h-9 bg-main-color">
                    <span>-40%</span>
                </div>

                {/* Favorite and Eye Icons */}
                <div className="absolute top-4 right-2">
                    <div onClick={favoriteHandler} className={`w-11 bg-withe  mb-1 flex justify-center items-center rounded-full h-11 cursor-pointer  transform transition-all ease-linear duration-300 ${favorite.find(item => item.id === data.id)? 'bg-rose-500': 'bg-white'}`}>
                        <MdFavoriteBorder className={`w-8 h-8 ${favorite.find(item => item.id === data.id)? 'text-white': ''}`} />
                    </div>
                    <div className="flex items-center justify-center mb-1 transition-all duration-300 ease-linear transform bg-white rounded-full cursor-pointer w-11 h-11 hover:bg-slate-300">
                        <FiEye className="w-8 h-8" />
                    </div>
                </div>

                {/* Add to Cart Button (Visible on Hover) */}
                <button
                    onClick={addHandler}
                    className={`absolute bottom-0 left-0 w-full text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${addToCart.find(item => item.id === data.id)? 'bg-rose-500': 'bg-black'}`}>
                    {addToCart.find(item => item.id === data.id)? <span>Already Added</span>: 'Add To Cart'}
                </button>
            </div>

            {/* Product Details */}
            <div className="mt-4">
                {/* Product Title */}
                <h3 className="font-semibold">
                    {data.title.length > 20 ? `${data.title.slice(0, 20)}...` : data.title}
                </h3>
                {/* Price */}
                <div className="flex gap-3 mt-2">

                    <span>${data.price}</span>
                    <span className="line-through">${(data.price - 10).toFixed(2)}</span>


                </div>
                <Link onClick={() => productHandler(data)} to={`/Products/:${data.id}`} className='text-red-400 hover:underline'>Details</Link>
                {/* Ratings */}
                <div className="flex items-center gap-1 mt-2 text-orange-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-black">(88)</span>
                </div>
            </div>
        </div>
    );
}

export default FlashItem;
