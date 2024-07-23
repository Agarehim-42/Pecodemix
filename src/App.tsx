import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import './App.css'

import About from './Pages/About'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Blog from './Pages/Blog'
import { ToastContainer } from 'react-toastify'


// Burda sehifelerin hisselerinin komponenetleri olcaq 


function App() {
  return (
    // React Fragment
    <>
    <BrowserRouter>
    <Header/>
    <ToastContainer/>
      

      <Routes>
      <Route path='/' element={<Home/>}/>

        <Route path='/About' element={<About/>} />

        <Route path='*' element={<NotFound/>} />

        <Route path='/Contact' element={<Contact/>}/>

        <Route path='/Services' element={<Services/>}/>

        <Route path='/Blog'  element={<Blog/>}/>
      </Routes>

    </BrowserRouter>

      
      
    </>
  )
}

export default App
