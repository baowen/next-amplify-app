import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import React, { useState } from 'react';
import { useRouter } from 'next/router'

export default function PostBody() {
    const router = useRouter();
    const [body, setBody] = useState('');
    

    const cookies = parseCookies();
    console.log('check your answers: ',{ cookies });
        let newPost = JSON.parse(cookies.newPost);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        router.push('/');

    }


    
    return (
        <div className={styles.container}>
            <Head>
                <title>Confirmation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                <h1 className={styles.body}>
                    Confirmation
                </h1>
                <div>
                    created with id:
                </div>
 
                
                <form onSubmit={handleSubmit}>

                    <p>
                        <button type="submit">Back to Home</button>
                    </p>
                </form>
            </main>
        </div>
    );
}
