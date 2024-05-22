import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import slider1 from '../assets/slide1.jpg'
import slider2 from '../assets/slide2.jpg'
import slider3 from '../assets/slide3.jpg'
import slider4 from '../assets/slide4.jpg'
import slider5 from '../assets/slide5.jpg'

const CategorySlider = () => {
    return (
        <Swiper
        slidesPerView={4}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <p className='text-3xl text-center text-white -mt-20'>Salades</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <p className='text-3xl text-center text-white -mt-20'>Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <p className='text-3xl text-center text-white -mt-20'>Soup</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <p className='text-3xl text-center text-white -mt-20'>Cake</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            <p className='text-3xl text-center text-white -mt-16'>Salades</p>
        </SwiperSlide>
      </Swiper>
    );
};

export default CategorySlider;