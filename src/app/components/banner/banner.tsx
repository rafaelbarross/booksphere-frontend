'use client'

import { Typography } from "@material-tailwind/react";

export default function Banner() {

    return (
        <div className='mb-40 drop-shadow-xl'>
        <Typography variant="h3" color="blue-gray" className='mb-8 dark:text-pink-300'>
        Todos os gêneros
        </Typography>

        <div className=" cursor-pointer">
          <img className="h-40 sm:h-full" src="./banner.png" alt="" />
        </div>
      </div>
    );
}