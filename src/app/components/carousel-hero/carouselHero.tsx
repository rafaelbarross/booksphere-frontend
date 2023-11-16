import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Typography } from '@material-tailwind/react';

export default function BookCategory() {
  return (
    <>
      <Swiper

        breakpoints={{
          // quando a largura da janela é >= 640px
          640: {
            slidesPerView: 1,
          },
          // quando a largura da janela é >= 768px
          768: {
            slidesPerView: 2,
          },
          // quando a largura da janela é >= 768px
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        // slidesPerView={3}
        // grid={{
        //   rows: 1,
        // }}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Grid, Pagination, Navigation, Autoplay]}
        className="mb-20"
      // slidesPerView={'auto'}
      // centeredSlides={true}

      >
        <SwiperSlide className="text-center space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image1.png" alt="" />
          <Typography variant="h4" color="blue-gray">
            Fantasia
          </Typography>
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image2.png" alt="" />
          <Typography variant="h4" color="blue-gray">
            Ação e aventura
          </Typography>
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image3.png" alt="" />
          <Typography variant="h4" color="blue-gray">
            Ficção histórica
          </Typography>
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image1.png" alt="" />
          <Typography variant="h4" color="blue-gray">
            Ficção
          </Typography>
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image2.png" alt="" />
          <Typography variant="h4" color="blue-gray">
            Ficção nhew
          </Typography>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
