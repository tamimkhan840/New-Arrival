import { Swiper, SwiperSlide } from 'swiper/react';
import slider_img from '../../../assets/Images/Slider-image-1.png';
import slider2img from '../../../assets/Images/Slider-image-2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function RightItem() {
  return (
    <div className="col-span-9 max-[780px]:col-span-12 mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[full] overflow-hidden xl:h-[500px] rounded-xl transition-all duration-500 ease-in-out transform hover:scale-105"
            src={slider2img}
            alt="Slider 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[full] overflow-hidden xl:h-[500px] rounded-xl transition-all duration-500 ease-in-out transform hover:scale-105"
            src={slider_img}
            alt="Slider 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[full] overflow-hidden xl:h-[500px] rounded-xl transition-all duration-500 ease-in-out transform hover:scale-105"
            src={slider2img}
            alt="Slider 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
