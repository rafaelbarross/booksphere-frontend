'use client'

import { Button, IconButton, Option, Select } from '@material-tailwind/react';
import { Dropdown } from 'flowbite-react';
import ContScroll from '../components/container-scroll/cont-scroll';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';

export default function Reading() {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    const [isSave, setIsSave] = useState(false);
    const handleIsSave = () => setIsSave((cur) => !cur);

    return (
        <div className="mx-auto container bg-back gap-x-20  md:gap-x-10 xl:gap-x-8 2xl:gap-x-20 grid md:grid-cols-[auto_1fr] mb-10">

            <aside className="b-light-blue-600  flex md:flex-col  gap-y-10 gap-x-6 sm:gap-x-10 mb-8 md:mb-0 items-center ">
                {/* Conteúdo da primeira coluna */}
                <div>
                    <img className='drop-shadow-md md:w-60 xl:w-52 2xl:w-60' src="./bookWeek/book1.png" alt="" />

                </div>

                <div className='space-y-5 w-full '>

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


            </aside>

            <main className="bg-reen-700 mb-20">
                {/* Conteúdo da segunda coluna */}




                <ContScroll />

                <AudioPlayer
                    className='mt-10 sticky bottom-10  !bg-white z-10'
                    autoPlay
                    src="./audio.mp3"
                    onPlay={e => console.log("onPlay")}
                    defaultCurrentTime="00:00" // será exibido antes dos metadados serem carregados
                    defaultDuration="01:02" // será exibido antes dos metadados serem carregados
                />

            </main>

        </div>

    );
}