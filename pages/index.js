import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Example Amplify Next.js Posts App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />


      <div className="govuk-width-container ">
        <main className="govuk-main-wrapper " id="main-content" role="main">
          <h1 className="govuk-heading-xl">
            Example Amplify NextJS Posts App
          </h1>

          <div>
            <Link href="/post/post-title">
              <a className="govuk-button">New Post</a>
            </Link>
          </div>
  
        </main>
      </div>

    </div>
  )
}

// export async function getServerSideProps() {
  
//     const res = await fetch(`https://my-json-server.typicode.com/baowen/demo/posts`);
//     const allPosts = await res.json();
//     // console.log(data);
//   // const allPosts = {
//   //   "posts": [
//   //     { "id": 1, "title": "Post 1" },
//   //     { "id": 2, "title": "Post 2" },
//   //     { "id": 3, "title": "Post 3" }
//   //   ],
//   // };
//   return {
//     props: { allPosts },
//   }
// }