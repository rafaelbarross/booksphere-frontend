'use client'

import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from "next/navigation";
import { api } from "../services/api";

type User = {
    name: string;
    email: string;
    avatar_url: string;
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>;
    palavra: string
}



export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    // const [user, setUser] = useState<User | null>(null);
    const [user, setUser] = useState<User | null>(null);

    const palavra = 'rafael'

    const isAuthenticated = !!user;

    // useEffect(() => {
    //     const { 'library-token': token } = parseCookies()

    //     if (token) {
    //         // Faça uma requisição para buscar os dados do usuário
    //         fetch('http://localhost:8000/users', {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(data => setUser(data));
    //     }
    // }, [users])


    // useEffect(() => {
    //     const { 'library-token': token } = parseCookies()

    //     if (token) {
    //         // Adicione a URL da sua API que retorna os dados do usuário
    //         fetch('http://localhost:8000/users', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             },
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             setUser(data);
    //         });
    //     }

    //     console.log('userdataaaaaa:', user)
    // }, [])

    useEffect(() => {
        console.log('usuario dados:', user);
    }, []);


    async function signIn({ email, password }: SignInData) {
        // Substitua 'url_da_sua_api' pelos valores corretos
        const response = await fetch('http://localhost:8000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (!response.ok) {
            throw new Error('401');
        }

        console.log('logado:', isAuthenticated)

        const data = await response.json();

        const dataUser = data.user;


        console.log('user data:', dataUser)


        // Substitua 'token' pelo nome correto do campo no seu objeto de resposta
        const token = data.token;

        if (token) {    
            // setIsAuthenticated(true);
            // Armazene o token para uso posterior
            setCookie(undefined, 'library-token', token, {
                maxAge: 60 * 60 * 1 // 1 HORA 
            });
            // setUser(dataUser); // Defina o estado do usuário aqui
            setTimeout(() => {
                router.push('/')
            }, 2000); // Redireciona para a página inicial após 2 segundos
        }

        api.defaults.headers['Authorization'] = `Bearer ${token}`






        // setUser(data);

        // // Substitua 'user' pelo nome correto do campo no seu objeto de resposta
        // const userInfo = data.data;

        // if (userInfo) {
        //     setUser(userInfo);
        // }

        // console.log(user);




    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, palavra }}>
            {children}
        </AuthContext.Provider>
    )

}