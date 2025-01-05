import { useEffect, useState, useRef, useContext } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import FlashItem from "./FlashItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { ShopContext } from "../../../Context/Context";

function FlashSales() {
  const { flashData } = useContext(ShopContext);

  // Swiper functionality
  const [isAutoplay, setIsAutoplay] = useState(false);
  const swiperRef = useRef(null);

  const handleSwiperClick = () => setIsAutoplay(!isAutoplay);
  const [value, setValue] = useState(4)


  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        setValue(2); // Set value to 2 for max-[1024px] devices
      }
      if (window.matchMedia("(max-width: 780px)").matches) {
        setValue(1); // Set value to 1 for max-[780px] devices
      }
      else {
        setValue(4); // Reset to default value otherwise
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures it runs once on mount



  // Timer functionality
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-16">
      <div className="flex items-center gap-4">
        <div className="w-6 rounded-md h-11 bg-main-color"></div>
        <span className="font-bold text-main-color">Today's</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-10 max-[780px]:flex-col">
          <h2 className="py-5 pb-0 text-4xl">Flash Sales</h2>
          {/* Timer */}
          <div className="flex gap-4 text-center">
            {Object.entries(timeLeft).map(([key, value], index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl font-bold">{String(value).padStart(2, "0")}</span>
                <span className="text-sm text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-6 max-[780px]:hidden">
          <div
            className="flex items-center justify-center transition-all duration-300 ease-linear transform bg-gray-200 rounded-full cursor-pointer w-14 h-14 hover:bg-gray-500"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaLongArrowAltLeft className="w-7 h-7" />
          </div>
          <div
            className="flex items-center justify-center transition-all duration-300 ease-linear transform bg-gray-200 rounded-full cursor-pointer w-14 h-14 hover:bg-gray-500"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaLongArrowAltRight className="w-7 h-7" />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={value}
        spaceBetween={0}
        freeMode={true}
        autoplay={isAutoplay ? { delay: 3000, disableOnInteraction: false } : false}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper "
        onClick={handleSwiperClick}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {flashData.length === 0 ? (
          <p className="py-10 text-center">Loading products...</p>
        ) : (
          flashData.map((item) => (
            <SwiperSlide key={item.id}>
              <FlashItem data={item} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}

export default FlashSales;
