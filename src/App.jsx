import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='w-11/12 m-auto'>
      <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
