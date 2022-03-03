import Head from 'next/head'
import ToggleDarkMode from '../components/ToggleDarkMode'
import CreativityIntro from "../components/CreativityPage/CreativityIntro"

export default function Creativity() {

  return (
    <div>
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
