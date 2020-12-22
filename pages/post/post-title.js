import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import React, { useState } from 'react';
import { useRouter } from 'next/router'

export default function PostTitle() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    

    const cookies = parseCookies();
    console.log({ cookies });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setTitle('');
        const post = {
            title: title,
        };
        console.log('post: ', post);
        console.log('string post: ', JSON.stringify(post));
        setCookie(null, 'newPost', JSON.stringify(post), {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });
        router.push('/post/post-body');
        
        // destroyCookie(null, 'fromGetServerSideProps');
    }


    
    return (
        <div className={styles.container}>
            <Head>
                <title>Enter the title of your post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Enter the title of your post
                </h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        <input type="text" value={title} onChange={({target}) => setTitle(target.value)} />
                    </label>
                    <p>
                        <button type="submit">Continue</button>
                    </p>
                </form>
            </main>
        </div>
    );
}
