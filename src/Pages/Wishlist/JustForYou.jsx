import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Context'
import img from '../../assets/Images/Category-Camera.png'

function JustForYou() {

    const { addToCart } = useContext(ShopContext)

  return (
      <div>
          <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Just For You</h2>
                <button className="px-4 py-2 duration-300 border border-black hover:bg-black hover:text-white">See All</button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { id: 1, discount: '25%', name: 'ASUS FHD Gaming Laptop', price: '$1500', originalPrice: '$2000', rating: 4.5, reviews: 65, img: 'https://placehold.co/200x200', alt: 'ASUS FHD Gaming Laptop' },
                    { id: 2, name: 'IPS LCD Gaming Monitor', price: '$1100', rating: 4.0, reviews: 55, img: 'https://placehold.co/200x200', alt: 'IPS LCD Gaming Monitor' },
                    { id: 3, discount: 'New', name: 'HAWT HW-002 Gamepad', price: '$150', rating: 4.8, reviews: 45, img: 'https://placehold.co/200x200', alt: 'HAWT HW-002 Gamepad' },
                    { id: 4, name: 'AK-500 Wired Keyboard', price: '$200', rating: 4.2, reviews: 30, img: 'https://placehold.co/200x200', alt: 'AK-500 Wired Keyboard' }
                ].map(item => (
                    <div key={item.id} className="p-4 border">
                        {item.discount && <div className="absolute px-2 py-1 text-white bg-red-500">{item.discount}</div>}
                        <div className='relative z-40 group'>
                            <img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt={item.alt} className="object-cover w-full h-40 mb-4" />
                            <button
                              className={`absolute bottom-0 left-0 w-full py-2 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${addToCart.find(item => item.id === product.id) ? 'bg-rose-500' : 'bg-black'
                                    }`}
                            >
                                {addToCart.find(item => item.id === product.id) ? 'Already Added' : 'Add To Cart'}
                            </button>
                        </div>
                        <h2 className="text-lg font-bold">{(item.name).slice(0,16)}</h2>
                        <div className="flex items-center justify-between mt-2">
                            <div>
                                <span className="text-red-500">{item.price}</span>
                                {item.originalPrice && <span className="ml-2 line-through">{item.originalPrice}</span>}
                            </div>

                        </div>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500">
                                {'★'.repeat(Math.floor(item.rating))}
                                {'☆'.repeat(5 - Math.floor(item.rating))}
                            </span>
                            <span className="ml-2">({item.reviews})</span>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default JustForYou