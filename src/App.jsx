import './App.css'
import ContentContainer from './components/ContentContainer'
import ContentList from './components/ContentList'
import Footer from './components/Footer'
import MoodFilter from './components/MoodFilter'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <ContentList/>
    <MoodFilter/>
    <Footer/>
    {/* <ContentContainer/> */}
    </>
  )
}

export default App
