import Head from 'next/head'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Header from '../../components/header';

export default function PostBody() {
    const router = useRouter();
    const [body, setBody] = useState('');
    

    const cookies = parseCookies();
    let newPost;
    if (cookies && cookies.newPost) {
        newPost = JSON.parse(cookies.newPost);
    }
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
        <div>
            <Head>
                <title>Enter the body of your post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            
            <div className="govuk-width-container ">
                <main className="govuk-main-wrapper " id="main-content" role="main">
                    <form onSubmit={handleSubmit}>
                        <div className="govuk-form-group">
                            <h1 className="govuk-label-wrapper">
                                <label className="govuk-label govuk-label--l" for="body">
                                    Enter the body of your post
                                </label>
                            </h1>
                            <div id="body-hint" className="govuk-hint">
                                Do not include personal or financial information, like your National Insurance number or credit card details.
                            </div>
                            <textarea className="govuk-textarea" id="body" name="body" rows="5" aria-describedby="body-hint" value={body} onChange={({target}) => setBody(target.value)}></textarea>
                        </div>

                        <p>
                            <button type="submit" className="govuk-button" >Continue</button>
                        </p>
                    </form>
                </main>
            </div>
        </div>
    );
}
