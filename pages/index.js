import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Intro from '../components/Intro'
import ProjectList from '../components/ProjectList'
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
      <About />
      <ProjectList />
      <Contact />
    </div>
  )
}
