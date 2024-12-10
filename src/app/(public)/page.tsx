'use client'


import Image from 'next/image'
import BookCategory from '../components/carousel-hero/carouselHero'
import BookWeek from '../components/carousel-books-week/book-week'
import BookLike from '../components/book-most-like/book-like'
import { Typography } from '@material-tailwind/react'
// import { Footer } from '../components/footer/footer'
import Banner from '../components/banner/banner'
import { ThemeProvider } from 'next-themes'

export default function Home() {




  return (
    <div className='w-full h-full'>
      <main className="mx-auto container px-4">
        <BookCategory />
        <BookWeek />
        <BookLike />
        <Banner />
        {/* <Footer /> */}
      </main>

    </div>


  )
}
