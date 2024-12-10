'use client'

import React, { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import { IconButton } from '@material-tailwind/react';


const ButtonTheme = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') setDarkMode(true)
    }, [])

    useEffect(() => {

        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {

            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode]);



    return (
        <>

            <IconButton onClick={() => setDarkMode(!darkMode)} variant="outlined" className='border-pink-400 transition duration-1000 ease-in-out  px-4 '>
                {darkMode ? <FaMoon className='text-pink-400' /> : <BsSunFill className='text-pink-400' />}
            </IconButton>

        </>
    )
}

export default ButtonTheme