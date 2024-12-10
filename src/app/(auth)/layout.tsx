import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { AuthProvider } from '../context/authContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Leitura Inclusiva',
    description: 'Compartilhe, venda e descubra livros incríveis!',
    openGraph: {
        type: "website",
        url: "https://leiturai.vercel.app/",
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
                <div>
                {/* <Header /> */}
                <AuthProvider>

                {children}
                </AuthProvider>

                </div>

            </body>
        </html>
    )
}