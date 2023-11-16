import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../globals.css'
// import './styles.css';

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Typography } from '@material-tailwind/react';

// type Props = {
//     title: string;
//     image: object;

//   };

export default function BookWeek() {
  return (
    <>
      <Typography variant="h3" color="blue-gray" className='mb-8'>
            Livros da semana
    </Typography>
      <Swiper

      slidesPerView={2}

        breakpoints={{
          // quando a largura da janela é >= 640px
          640: {
            slidesPerView: 3,
          },
          // quando a largura da janela é >= 768px
          768: {
            slidesPerView: 4,
          },
          // quando a largura da janela é >= 768px
          1024: {
            slidesPerView: 5,
          },
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        // slidesPerView={3}
        // grid={{
        //   rows: 1,
        // }}
        spaceBetween={15}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Grid, Pagination, Navigation, Autoplay]}
        className="mb-20"
      // slidesPerView={'auto'}
      // centeredSlides={true}

      >
        <SwiperSlide className="text-center space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book1.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book2.png" alt="" />
      
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book3.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book4.png" alt="" />
     
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book5.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book5.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book5.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book5.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3">
          <img className='drop-shadow-md' src="./bookWeek/book5.png" alt="" />
        </SwiperSlide>


      </Swiper>
    </>
  );
}
