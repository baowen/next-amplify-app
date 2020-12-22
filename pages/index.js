import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Index({ allPosts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example Amplify Next.js Posts App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Example Amplify NextJS Posts App
        </h1>

        <ul>
          {allPosts.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
        
        <div>
          <Link href="/post/post-title">
            <a>New Post</a>
          </Link>
        </div>
  
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  
    const res = await fetch(`https://my-json-server.typicode.com/baowen/demo/posts`);
    const allPosts = await res.json();
    // console.log(data);
  // const allPosts = {
  //   "posts": [
  //     { "id": 1, "title": "Post 1" },
  //     { "id": 2, "title": "Post 2" },
  //     { "id": 3, "title": "Post 3" }
  //   ],
  // };
  return {
    props: { allPosts },
  }
}