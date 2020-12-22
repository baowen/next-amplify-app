import Head from 'next/head'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';

export default function CheckYourAnswers() {
    const router = useRouter();
    const [id, setId] = useState('');
    const cookies = parseCookies();
    let post;
    if (cookies && cookies.newPost) {
        post = JSON.parse(cookies.newPost);
    }
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
        <div>
            <Head>
                <title>Check your answers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            
            <div class="govuk-width-container">
                <main class="govuk-main-wrapper " id="main-content" role="main">
                    <h1 className="govuk-heading-l">Check your answers before sending your post</h1>
                    <dl className="govuk-summary-list govuk-!-margin-bottom-9">
                        <div className="govuk-summary-list__row">
                            <dt className="govuk-summary-list__key">
                                Title
                            </dt>
                            <dd className="govuk-summary-list__value">
                                {title}
                            </dd>
                        </div>
                        <div className="govuk-summary-list__row">
                            <dt className="govuk-summary-list__key">
                                Body
                            </dt>
                            <dd className="govuk-summary-list__value">
                                {body}
                            </dd>
                        </div>
                    </dl>
                
                    <form onSubmit={handleSubmit}>
                        <p>
                            <button className="govuk-button" type="submit">Continue and submit</button>
                        </p>
                    </form>
                </main>
            </div>
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