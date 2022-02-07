import Head from 'next/head'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>JH Portfolio</title>
        <meta name="description" content="created by Jehanne Hodge" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
      <Intro />
      <Projects />
    </div>
  )
}
