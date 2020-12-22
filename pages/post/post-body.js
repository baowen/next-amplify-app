import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import React, { useState } from 'react';
import { useRouter } from 'next/router'

export default function PostBody() {
    const router = useRouter();
    const [body, setBody] = useState('');
    

    const cookies = parseCookies();
    let newPost = JSON.parse(cookies.newPost);
    console.log(newPost.title);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setBody('');
        newPost['body'] = body;
        setCookie(null, 'newPost', JSON.stringify(newPost), {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });
        router.push('/post/check-your-answers');
        
        // destroyCookie(null, 'fromGetServerSideProps');
    }


    
    return (
        <div className={styles.container}>
            <Head>
                <title>Enter the body of your post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Enter the body of your post
                </h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="body">
                        <input type="text" value={body} onChange={({target}) => setBody(target.value)} />
                    </label>
                    <p>
                        <button type="submit">Continue</button>
                    </p>
                </form>
            </main>
        </div>
    );
}
