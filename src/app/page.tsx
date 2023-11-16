'use client'


import Image from 'next/image'
import BookCategory from './components/carousel-hero/carouselHero'
import BookWeek from './components/carousel-books/carousel-books'
import BookLike from './components/book-most-like/book-like'
import { Typography } from '@material-tailwind/react'
import { Footer } from './components/footer/footer'
import Banner from './components/banner/banner'

export default function Home() {
  return (
    <main className="mx-auto container">
      <BookCategory />
      <BookWeek />
      <BookLike />
      <Banner/>
      <Footer/>
    </main>
  )
}
