
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
import { getBooks } from '@/app/(public)/book/services/get-book';
import Link from 'next/link';

// type Props = {
//     title: string;
//     image: object;

//   };

// type Book = {
//   id: string;
//   img: string;
//   alt: string;
//   audio?: string;
// };

//   export const booksLike: Book[] = [
//     { id: 'book11', img: './mostLike/book1.png', alt: 'Book 1' },
//     { id: 'book22', img: './mostLike/book2.png', alt: 'Book 2' },
//     { id: 'book32', img: './mostLike/book3.png', alt: 'Book 3' },
//     { id: 'book42', img: './mostLike/book4.png', alt: 'Book 4' },
//     { id: 'book52', img: './mostLike/book5.png', alt: 'Book 5' },
//     { id: 'book58', img: './bookWeek/book1.png', alt: 'Book 6' },
//     { id: 'book59', img: './bookWeek/book2.png', alt: 'Book 7' },
//     { id: 'book50', img: './bookWeek/book3.png', alt: 'Book 8' },
//     { id: 'book54', img: './bookWeek/book4.png', alt: 'Book 9' },
//     { id: 'book53', img: './bookWeek/book5.png', alt: 'Book 9' },
//     // Adicione mais livros conforme necessário
//   ];

export default async function BookLike() {

  // const {push} = useRouter();

  // const readingBook = (id: string) => {
  //   push(`/${id}`);
  // };


  const books = await getBooks(10);


  return (
    <>
      <Typography variant="h3" color="blue-gray" className='mb-8 dark:text-pink-300'>
        Mais curtidos
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
        {books.map((book: any) => (
          <SwiperSlide key={book.id}  className="text-center space-y-3 cursor-pointer">
            <Link href={`/${book.id}`}>
            
            <img className='drop-shadow-md w-[292px] h-96'  src={book.url} alt={book.title}  />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
