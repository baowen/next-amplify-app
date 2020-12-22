import Head from 'next/head'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';

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
        <div>
            <Head>
                <title>Enter the title of your post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            
            <div className="govuk-width-container ">
                <main className="govuk-main-wrapper " id="main-content" role="main">
                    <form onSubmit={handleSubmit}>
                        <div className="govuk-form-group">
                            <h1 className="govuk-label-wrapper">
                                <label class="govuk-label govuk-label--l" for="title">
                                    What is the title of the post?
                                </label>
                            </h1>
                            <input className="govuk-input" id="title" name="title" type="text" value={title} onChange={({target}) => setTitle(target.value)}/>
                        </div>
                    
                        <p>
                            <button className="govuk-button" type="submit">Continue</button>
                        </p>
                    </form>
                </main>
            </div>
        </div>
    );
}
