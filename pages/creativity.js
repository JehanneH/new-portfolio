import Head from 'next/head'
import ToggleDarkMode from '../components/ToggleDarkMode'
import CreativityIntro from "../components/CreativityPage/CreativityIntro"
import { ThemeContext } from '../context'
import { useContext } from "react";

export default function Creativity() {
  const theme = useContext(ThemeContext)
  const darkMode =theme.state.darkMode
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <Head>
        <title>Jehanne Hodge/Art</title>
        <meta name="description" content="created by Jehanne Hodge"/>
        <link rel="icon" href="/img/icon.png" />
      </Head>
      <ToggleDarkMode />
      <CreativityIntro />
    </div>
  )
}
