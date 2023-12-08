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
import { useRouter } from 'next/navigation';

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
  { id: 'book1', img: './bookWeek/pequenoprincipe.jpg', alt: 'Book 1', audio:'./audio/pequenoprincipe.mp3'},
  { id: 'book2', img: './bookWeek/book2.png', alt: 'Book 2' },
  { id: 'book3', img: './bookWeek/book3.png', alt: 'Book 3' },
  { id: 'book4', img: './bookWeek/book4.png', alt: 'Book 4' },
  { id: 'book5', img: './bookWeek/book5.png', alt: 'Book 5' },
  // Adicione mais livros conforme necessário
];

export default function BookWeek() {

  const {push} = useRouter();

 
  const readingBook = (id: string) => {
    push(`/${id}`);
  };

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
        {booksWeek.map((book) => (
          <SwiperSlide key={book.id} onClick={() => readingBook(book.id)} className="text-center space-y-3 cursor-pointer">
            <img className='drop-shadow-md' src={book.img} alt={book.alt} />
          </SwiperSlide>
        ))}


      </Swiper>
    </>
  );
}
