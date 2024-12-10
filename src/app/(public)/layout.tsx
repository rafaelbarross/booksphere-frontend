import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Header } from '../components/header/header'
import Cart from '../components/cart/cart'
import Footer from '../components/footer/footer'
import { AuthProvider } from '../context/authContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Library',
    description: 'Compartilhe, venda e descubra livros incríveis!',
    openGraph: {
        type: "website",
        url: "https://leiturai.vercel.app",
        title: "The Book",
        description: "Compartilhe, venda e descubra livros incríveis!",
        siteName: "The Book",
        images: [{
            url: "https://thebook.vercel.app/leitura.png",
        }],
    }
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">


            <head>
                <link rel="icon" href="./leitura.png" sizes="any" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>

            <body className={`${inter.className} dark:bg-dark`}>
                {/* <body  className='dark:bg-dark'> */}
                <div className='p-0'>
                    {/* <Cart/> */}
                    {/* <header className='relative top-7'> */}
                    {/* <div className='px-10 sm:px-0 relative mx-4 2xl:mx-0'> */}
                    <header className='mx-4 2xl:mx-0 mt-5 sticky top-5 z-10'>

                        <Header />
                    </header>
                    {/* </div> */}
                    {/* </header> */}
                    <AuthProvider>
                    {children}

                    </AuthProvider>

                    <Footer/>

                </div>

            </body>
        </html>
    )
}
