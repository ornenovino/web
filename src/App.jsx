import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Biography from './components/Biography'
import Conferences from './components/Conferences'
import Press from './components/Press'
import Video from './components/Video'

function App() {

  return (
    <>
      <Header />
      <Intro />
      <Biography />
      <Conferences deviceType="desktop" />
      <Video deviceType="desktop" />
      <Press />

    </>
  )
}

export default App
