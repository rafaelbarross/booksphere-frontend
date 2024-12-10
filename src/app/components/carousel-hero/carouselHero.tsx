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
import { Button, IconButton, Typography } from '@material-tailwind/react';

export default function BookCategory() {
  return (
    <>
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
            slidesPerView: 3.2,
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
        className="mb-20  mt-20"
      // slidesPerView={'auto'}
      // centeredSlides={true}

      >
        {/* <div className='bg-blue-gray-400'> */}


        <SwiperSlide className="text-center space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image1.png" alt="" />
          <Typography variant="h4" color="blue-gray" className='dark:text-pink-200'>
            Fantasia
          </Typography>
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image2.png" alt="" />
          <Typography variant="h4" color="blue-gray" className='dark:text-pink-200'>
            Ação e aventura
          </Typography>
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image3.png" alt="" />
          <Typography variant="h4" color="blue-gray" className='dark:text-pink-200'>
            Ficção Cristã
          </Typography>
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image1.png" alt="" />
          <Typography variant="h4" color="blue-gray" className='dark:text-pink-200'>
            Romance
          </Typography>
        </SwiperSlide>

        <SwiperSlide className="text-center  space-y-3 cursor-pointer">
          <img className='drop-shadow-lg' src="./carouselHero/image2.png" alt="" />
          <Typography variant="h4" color="blue-gray" className='dark:text-pink-200'>
            Ficção
          </Typography>
        </SwiperSlide>

        {/* </div> */}



      </Swiper>
    </>
  );
}





// export default function BookCategory() {
//   return (
//     <>


//       <Swiper

//         breakpoints={{
//           // quando a largura da janela é >= 640px
//           640: {
//             slidesPerView: 1,
//           },
//           // quando a largura da janela é >= 768px
//           768: {
//             slidesPerView: 1,
//           },
//           // quando a largura da janela é >= 768px
//           1024: {
//             slidesPerView: 1,
//           },
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         // navigation={true}
//         // slidesPerView={3}
//         // grid={{
//         //   rows: 1,
//         // }}
//         spaceBetween={0}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         modules={[Grid, Pagination, Navigation, Autoplay]}
//         className="mb-20 border-red-600 border- "
//       // slidesPerView={'auto'}
//       // centeredSlides={true}

//       >
//         {/* <div className='bg-blue-gray-400'> */}


//         <SwiperSlide className="">

//           <div className='text-center h-screen w-full  grid grid-rows-[100%_1fr]  lg:grid-cols-[50%_50%] 2xl:grid-cols-[50%_50%] cursor-pointe bg-[#7FB5C3]'>


//             <div style={{ backgroundImage: 'url(./cover.jpg)' }} className='bg-cover bg-no-repeat w-full h-full '>

//               {/* <img className='drop-shadow-lg bg-cover' src="" alt="" /> */}
//             </div>

//             <div className='bg-whit flex justify-center items-center absolute lg:static top-0 bottom-0 right-0 left-0 backdrop-blur-sm '>

//               <div className='mt-20 sm: xl:mt-24'>
//                 <div>

//                   <img className='drop-shadow-lg 2xl:w-80 xl:w-56 mb-5 w-64' src="./principe.png" alt="book" />
//                 </div>

//                 <Button variant='gradient' color='pink' className='w-full ' size='lg'>
//                   COMPRAR AGORA
//                 </Button>
//               </div>
//             </div>
//           </div>

//         </SwiperSlide>

//         <SwiperSlide className="">

//           <div className='text-center h-screen w-full  grid grid-rows-[100%_1fr]  lg:grid-cols-[50%_50%] 2xl:grid-cols-[50%_50%] cursor-pointe bg-[#7FB5C3]'>


//             <div style={{ backgroundImage: 'url(./cover.jpg)' }} className='bg-cover bg-no-repeat w-full h-full '>

//               {/* <img className='drop-shadow-lg bg-cover' src="" alt="" /> */}
//             </div>

//             <div className='bg-whit flex justify-center items-center absolute lg:static top-0 bottom-0 right-0 left-0 backdrop-blur-sm '>

//               <div className='mt-20 sm: xl:mt-24'>
//                 <div>

//                 <img className='drop-shadow-lg 2xl:w-80 xl:w-56 mb-5 w-64' src="./principe.png" alt="book" />

//                 </div>

//                 <Button variant='gradient' color='pink' className='w-full ' size='lg'>
//                   COMPRAR AGORA
//                 </Button>
//               </div>
//             </div>
//           </div>

//         </SwiperSlide>

//         {/* </div> */}

//       </Swiper>
//     </>
//   );
// }
