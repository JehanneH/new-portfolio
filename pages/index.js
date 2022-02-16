import Head from 'next/head'
import { useContext } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Intro from '../components/Intro'
import ProjectList from '../components/ProjectList'
import Toggle from '../components/Toggle'
import { ThemeContext } from '../context'
import styles from '../styles/Home.module.css'

export default function Home() {

  const theme = useContext(ThemeContext)
  const darkMode =theme.state.darkMode

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <Head>
        <title>JH Portfolio</title>
        <meta name="description" content="created by Jehanne Hodge" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  )
}
