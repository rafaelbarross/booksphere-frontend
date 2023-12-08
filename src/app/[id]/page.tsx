'use client'


import { Button, IconButton, Option, Select } from '@material-tailwind/react';
import { Dropdown } from 'flowbite-react';
import ContScroll from '../components/container-scroll/cont-scroll';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { booksWeek } from '../components/carousel-books-week/book-week';
import { booksLike } from '../components/book-most-like/book-like';

type ReadingProps = {
    params: {
        id: string;
    };
};

export default function Reading({ params }: ReadingProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    const [isSave, setIsSave] = useState(false);
    const handleIsSave = () => setIsSave((cur) => !cur);

    const id = params.id

    if (!id) {
        return <div>Loading...</div>
    }

    const allBooks = [...booksWeek, ...booksLike];
    const book = allBooks.find(book => book.id === id);


    if (!book) {
        return <div>Book not found</div>
    }

    return (
            <div className="mx-auto xl:mt-32 2xl:mt-48 container max-w-2xl bg-back gap-x-20 sm:gap-x-10  md:gap-x-10 xl:gap-x-10 2xl:gap-x-12 grid sm:grid-cols-[auto_1fr] mb-10 ">

                <aside className="b-light-blue-600  flex md:flex-col  gap-y-10 gap-x-6 sm:gap-x-10 mb-8 md:mb-0 items-center justify-center">
                    {/* Conteúdo da primeira coluna */}
                    <div className=''>
                        <img className=' w-52 drop-shadow-md md:w-60 xl:w-52 2xl:w-60' src={book?.img} alt={book?.alt} />

                        {/* <p>{id}</p> */}
                    </div>

                </aside>

                <main className="bg-reen-700 bgred-800 gap-y-5 gap-y flex flex-col">
                    {/* Conteúdo da segunda coluna */}




                    {/* <ContScroll /> */}


                    <div className='space-y-5 w-full'>

                        <div className='flex gap-x-5 items-center'>
                            <IconButton
                                variant="gradient"
                                size="lg"
                                color={isFavorite ? "pink" : "blue-gray"}
                                onClick={handleIsFavorite}
                                className='px-6'
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </IconButton>

                            <Button
                                variant="gradient"
                                color={isSave ? "pink" : "blue-gray"}
                                onClick={handleIsSave}
                                size="lg"
                                className=" lg:inline-block  w-full space-x-2 sm:space-x-5"
                            >
                                <i className="fa fa-bookmark text-base" />
                                <span>Salvar</span>
                            </Button>

                            {/* <IconButton variant="outlined" className="">
                            <i className="fas fa-heart" />
                            SAVE
                        </IconButton> */}
                        </div>

                        <Select size='lg' variant='outlined' color='pink' className='' label="Gênero da voz">
                            <Option>Feminina</Option>
                            <Option>Masculina</Option>
                        </Select>

                        <Select size='lg' variant='outlined' color='pink' className='' label="Selecione a voz">
                            <Option>Brenda</Option>
                            <Option>Thamiris</Option>
                        </Select>
                    </div>

                    <AudioPlayer

                        className='  !bg-white z-10 mt-auto'
                        // autoPlay
                        src={book.audio}
                        onPlay={e => console.log("onPlay")}
                        defaultCurrentTime="00:00" // será exibido antes dos metadados serem carregados
                        defaultDuration="01:49:43" // será exibido antes dos metadados serem carregados
                    />

                    {/* <audio controls className='w-full mt-auto'>
                    <source src={book.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio> */}

                </main>

            </div>

    );
}