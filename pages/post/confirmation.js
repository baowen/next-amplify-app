import Head from 'next/head'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';

export default function PostConfirmation() {
    const router = useRouter();
    // const [body, setBody] = useState('');
    

    // const cookies = parseCookies();
    // let newPost;
    // if (cookies) {
    //     newPost = JSON.parse(cookies.newPost);
    // }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        router.push('/');

    }


    
    return (
        <div>
            <Head>
                <title>Confirmation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            
            <div className="govuk-width-container">
                <main className="govuk-main-wrapper govuk-main-wrapper--l" id="main-content" role="main">
                    <div className="govuk-grid-row">
                        <div className="govuk-panel govuk-panel--confirmation">
                            <h1 className="govuk-panel__title">
                                Post complete
                            </h1>
                            <div className="govuk-panel__body">
                                Your reference number<br></br><strong>HDJ2123F</strong>
                            </div>
                        </div>

 
                
                        <form onSubmit={handleSubmit}>
                            <p>
                                <button type="submit"className="govuk-button" >Back to Home</button>
                            </p>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}
