import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import VideoBackground from './components/VideoBackground'

function App() {

  return (
    <>
      <div className='w-11/12 m-auto'>
      <Navbar/>
       {/* <VideoBackground videoUrl={bg}/> */}
        <Home/>
      </div>
    </>
  )
}

export default App
