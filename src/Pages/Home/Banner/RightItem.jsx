
import { Swiper, SwiperSlide } from 'swiper/react';
import slider_img from '../../../assets/Images/Slider-image-1.png'
import slider2img from '../../../assets/Images/Slider-image-2.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function RightItem() {


    return (
        <div className=' col-span-9 max-[780px]:col-span-12 mt-10'>
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

                className="mySwiper "
            >
                <SwiperSlide><img className='w-full h-[full] overflow-hidden xl:h-[500px] rounded' src={slider2img} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[full] overflow-hidden xl:h-[500px] rounded' src={slider_img} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[full] overflow-hidden xl:h-[500px] rounded' src={slider2img} alt="" /></SwiperSlide>



            </Swiper>
        </div>
    );
}
