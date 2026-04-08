import Navbar from './component/Navbar'
import './App.css'
import { Route ,Routes } from 'react-router-dom'
import Home from './pagess/Home'

function App() {
 

  return (
    <>
    <div>
     <Navbar/>
     <div className='min-h-[70vh]' >
       <Routes>
        <Route path='/' element = {<Home/>}/>
       </Routes>
     </div>
     </div>
    </>
  )
}

export default App
