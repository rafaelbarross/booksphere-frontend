'use client'

import { Button, IconButton, Option, Select, Typography } from '@material-tailwind/react';
import { Dropdown } from 'flowbite-react';
import ContScroll from '../../components/container-scroll/cont-scroll';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { booksWeek } from '../../components/carousel-books-week/book-week';
// import { booksLike } from '../../../components/book-most-like/book-like';
import PdfComponent from '../../components/pdf-component/pdf-component';
import { getBookById } from '../book/services/get-book-by-id';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import '../../globals.css'
import { Grid, Pagination, Navigation, Autoplay, FreeMode, Thumbs } from 'swiper/modules';

// type ReadingProps = {
//     params: {
//         bookId: string;
//     };
// };

// eslint-disable-next-line @next/next/no-async-client-component
export default function Reading({ params }: { params: { bookId: string } }) {
    // const [isFavorite, setIsFavorite] = useState(false);
    // const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    // const [isSave, setIsSave] = useState(false);
    // const handleIsSave = () => setIsSave((cur) => !cur);

    // const book = await getBookById('1');

    const [thumbsSwiper, setThumbsSwiper] = useState(null);



    return (
        <div className="mx-auto mt-10 sm:mt-10 px-4 sm:px-4 container bg-back gap-x-20  md:gap-x-10 xl:gap-x-20 2xl:gap-x-20 grid md:grid-cols-[50%_auto] grid-cols-1 mb-40">

            <div className='mb-10 md:mb-20'>

                {/* <div className='py-10 px-0  rounded-md bg-pink-100 hidden md:block '>
                    <img className=' rounded-lg w-36 h- drop-shadow-md md:w-32 xl:w-44 2xl:w-60 m-auto' src={'./principe.png'} />
                </div> */}

                {/* MOBILE */}



                {/* <div className='hidden md:block bg-pink-40 p-0 mt-10  '>
                   
                
                </div> */}
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 mb-5 rounded-md bg-pink-100"
                >
                    <SwiperSlide className='py-10 px-0 rounded-md bg-pink-100'>
                        <img className=' rounded-lg w-36 h- drop-shadow-md md:w-32 xl:w-44 2xl:w-60 m-auto' src={'./bookWeek/book1.png'} />
                    </SwiperSlide>
                    <SwiperSlide className='py-10 px-0 rounded-md bg-pink-100'>
                        <img className=' rounded-lg w-36 h- drop-shadow-md md:w-32 xl:w-44 2xl:w-60 m-auto' src={'./bookWeek/book2.png'} />
                    </SwiperSlide>
                    <SwiperSlide className='py-10 px-0 rounded-md bg-pink-100'>
                        <img className=' rounded-lg w-36 h- drop-shadow-md md:w-32 xl:w-44 2xl:w-60 m-auto' src={'./bookWeek/book3.png'} />
                    </SwiperSlide>
                    <SwiperSlide className='py-10 px-0 rounded-md bg-pink-100'>
                        <img className=' rounded-lg w-36 h- drop-shadow-md md:w-32 xl:w-44 2xl:w-60 m-auto' src={'./bookWeek/book4.png'} />
                    </SwiperSlide>
                    <SwiperSlide className='py-10 px-0 rounded-md bg-pink-100'>
                        <img className=' rounded-lg w-36 h- drop-shadow-md md:w-32 xl:w-44 2xl:w-60 m-auto' src={'./bookWeek/book5.png'} />
                    </SwiperSlide>


                </Swiper>

                <Swiper
                 slidesPerView={1.2}

                 breakpoints={{
                   // quando a largura da janela é >= 640px
                   640: {
                     slidesPerView: 2.2,
                   },
                   // quando a largura da janela é >= 768px
                   768: {
                     slidesPerView: 2.2,
                   },
                   // quando a largura da janela é >= 768px
                   1024: {
                     slidesPerView: 4.2,
                   },
                 }}
                    onSwiper={setThumbsSwiper}
                    // loop={true}
                    spaceBetween={10}
                    // slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide className="text-center  cursor-pointer bg-pink-100 px-10 py-5 rounded-md grid place-items-center">
                        {/* <img className='drop-shadow-md' src={book.url} alt={book.alt} /> */}

                        <img className='drop-shadow-md w-24' src={'./bookWeek/book1.png'} />

                    </SwiperSlide>

                    <SwiperSlide className="text-center  cursor-pointer bg-pink-100 px-10 py-5 rounded-md grid place-items-center">
                        {/* <img className='drop-shadow-md' src={book.url} alt={book.alt} /> */}

                        <img className='drop-shadow-md w-24' src={'./bookWeek/book2.png'} />

                    </SwiperSlide>

                    <SwiperSlide className="text-center  cursor-pointer bg-pink-100 px-10 py-5 rounded-md grid place-items-center">
                        {/* <img className='drop-shadow-md' src={book.url} alt={book.alt} /> */}

                        <img className='drop-shadow-md w-24' src={'./bookWeek/book3.png'} />

                    </SwiperSlide>

                    <SwiperSlide className="text-center  cursor-pointer bg-pink-100 px-10 py-5 rounded-md grid place-items-center">
                        {/* <img className='drop-shadow-md' src={book.url} alt={book.alt} /> */}

                        <img className='drop-shadow-md w-24' src={'./bookWeek/book4.png'} />

                    </SwiperSlide>

                    <SwiperSlide className="text-center  cursor-pointer bg-pink-100 px-10 py-5 rounded-md grid place-items-center">
                        {/* <img className='drop-shadow-md' src={book.url} alt={book.alt} /> */}

                        <img className='drop-shadow-md w-24' src={'./bookWeek/book5.png'} />

                    </SwiperSlide>

                </Swiper>

            </div>

            <div className=' md:px-0 xl:px-20'>
                <Typography variant="h3" color="blue-gray" className='mb-5 dark:text-pink-300'>
                    O Pequeno Principe
                </Typography>

                <p className='text-black text-lg font-extralight mb-4 dark:text-white'>Antoine de Saint-Exupéry</p>

                <div className='mb-5'>
                    <p className='text-zinc-700 text-opacity-90 text-4xl font-light sr-only'></p>
                    <RatingWithText />

                </div>

                <div className='flex justify-betwee space-x-5 items-center mb-8'>
                    <p className='text-black text-opacity-90 text-lg font-extrabold line-throug tracking-widest dark:text-white relative md:text-xl xl:text-3xl'>R$ 50,00
                        <span className='absolute top-[40%] left-0 w-full h-1 bg-pink-300'></span>
                    </p>

                    <p className='text-black text-opacity-90 text-lg font-extrabold  tracking-widest bg-pink-100 rounded-lg px-4 py-2 dark:bg-pink-300 dark:text-white md:text-xl xl:text-3xl'>R$ 35,00</p>

                </div>

                <Button variant='filled' color='pink' size='lg' fullWidth>
                    Comprar
                </Button>

            </div>





        </div>

    );
}

import React from "react";
import { Rating } from "@material-tailwind/react";

function RatingWithText() {
    const [rated, setRated] = React.useState(4);

    return (
        <div className="flex items-center gap-2 font-bold text-blue-gray-500 dark:text-white">
            {rated}.7
            <Rating value={4} onChange={(value) => setRated(value)} />
            <Typography color="blue-gray" className="font-medium text-blue-gray-500 dark:text-white">
                134 avaliações
            </Typography>
        </div>
    );
}

