import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import React, { useState } from 'react';
import { useRouter } from 'next/router'

export default function CheckYourAnswers() {
    const router = useRouter();
    const [id, setId] = useState('');
    const cookies = parseCookies();
    let post = JSON.parse(cookies.newPost);
    let title = '';
    let body = '';
    if (typeof post !== 'undefined') {
        console.log("title: ", post.title);
        title = post.title;
        body = post.body;
    }
    
    const handleSubmit = (event) => {
        console.log("handle submit");
        event.preventDefault();
        

        
        fetch('https://my-json-server.typicode.com/baowen/demo/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json()
        ).then(post => {
            console.log('Success:', post.id);
            setId(post.id);
            setCookie(null, 'newPost', JSON.stringify(post), {
                maxAge: 24 * 60 * 60,
                path: '/',
            });
             router.push('/post/confirmation');
        })
        .catch((error) => {
            console.error('Error:', error);
        });;

        
    }


    
    return (
        <div className={styles.container}>
            <Head>
                <title>Check your answers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                <h1 className={styles.body}>
                    Check your answers
                </h1>
                <div>
                    title: {title}
                </div>
                <div>
                    body: {body}
                </div>
                
                <form onSubmit={handleSubmit}>
                    <p>
                        <button type="submit">Continue and submit</button>
                    </p>
                </form>
            </main>
        </div>
    );
}

// This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts

//       const cookies = parseCookies();
//     console.log('check your answers: ', cookies.newPost);
//     // let newPost = JSON.parse(cookies.newPost);
//     // let newPost = cookies.newPost;

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       newPost,
//     },
//   }
// }