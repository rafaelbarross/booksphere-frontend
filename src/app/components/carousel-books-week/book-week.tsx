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
import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
// type Props = {
//     title: string;
//     image: object;

//   };

type Book = {
  id: string;
  img: string;
  alt: string;
  audio?: string;
};


export const booksWeek: Book[] = [
  { id: 'o-pequeno-principe', img: './bookWeek/pequenoprincipe.jpg', alt: 'Book 1', audio: './audio/pequenoprincipe.mp3' },
  { id: 'book2', img: './bookWeek/book2.png', alt: 'Book 2' },
  { id: 'book3', img: './bookWeek/book3.png', alt: 'Book 3' },
  { id: 'book4', img: './bookWeek/book4.png', alt: 'Book 4' },
  { id: 'book5', img: './bookWeek/book5.png', alt: 'Book 5' },
  { id: 'book11', img: './mostLike/book1.png', alt: 'Book 6' },
  { id: 'book22', img: './mostLike/book2.png', alt: 'Book 7' },
  { id: 'book32', img: './mostLike/book3.png', alt: 'Book 8' },
  { id: 'book42', img: './mostLike/book4.png', alt: 'Book 9' },
  { id: 'book52', img: './mostLike/book5.png', alt: 'Book 10' },
  // Adicione mais livros conforme necessário
];

export default function BookWeek() {

  const { push } = useRouter();


  const readingBook = (id: string) => {
    push(`/${id}`);
  };

  return (
    <>
      <Typography variant="h3" color="blue-gray" className='mb-8 dark:text-pink-300'>
        Livros da semana
      </Typography>
      <Swiper

        slidesPerView={2.5}

        breakpoints={{
          // quando a largura da janela é >= 640px
          640: {
            slidesPerView: 3.5,
          },
          // quando a largura da janela é >= 768px
          768: {
            slidesPerView: 4.5,
          },
          // quando a largura da janela é >= 768px
          1024: {
            slidesPerView: 5.5,
          },
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        freeMode={true}
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
        className="mb-20 pt-5"
      // slidesPerView={'auto'}
      // centeredSlides={true}

      >
        {booksWeek.map((book) => (
          <SwiperSlide key={book.id} onClick={() => readingBook(book.id)} className=" text-center space-y-3 cursor-pointer">
            <div className="relative overflow-hidden transition duration-300 transform rounded-3xl shadow-l lg:hover:-translate-y-2 hover:shadow-2x z-50 group">
              <img className='relative drop-shadow-m' src={book.img} alt={book.alt} />

              <div className="hidden lg:block absolute inset-0 lg:flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg lg:text-sm xl:text-xl font-bold text-gray-100">
                  O Pequeno principe
                </p>
                <p className="mb-4 text-xs text-gray-100">Antoine de Saint-Exupéry</p>

                <div className='flex justify-between space-y-3 flex-col items-center mb-8'>
                  <p className='text-white text-opacity-90 text-lg font-extrabold line-throug tracking-widest dark:text-white relative md:text-xl xl:text-xl'>R$ 50,00

                  <span className='absolute top-[40%] left-0 w-0 h-1 bg-pink-300 transition-all duration-700 group-hover:w-full delay-200'></span>

                  </p>

                  <p className='text-black text-opacity-90 text-lg font-extrabold  tracking-widest bg-pink-100 rounded-lg px-3 py-2 dark:bg-pink-300 dark:text-white md:text-xl xl:text-xl'>R$ 35,00</p>

                </div>

                {/* <p className="mb-4 text-xs tracking-wide text-gray-100">
                  Professora do Ifal Campus Arapiraca.
                </p> */}
                <div className="flex items-center justify-center space-x-3">
                  {/* <a
                    rel="noreferrer"
                    target='_blank'
                    href="https://www.instagram.com/adriana.santanaferreira.52/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" fill="currentColor" height="35" viewBox="0 0 30 30">
                      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                    </svg>
                  </a> */}
                  <Button size='lg' variant='filled' color='pink'>
                    Detalhes
                  </Button>

                </div>
              </div>
            </div>

            <Typography variant="h6" color="blue-gray" className='mb-8 dark:text-pink-300'>
              O Pequeno principe
            </Typography>



            {/* <img className='relative drop-shadow-md' src={book.img} alt={book.alt} /> */}
          </SwiperSlide>
        ))}


      </Swiper>
    </>
  );
}
