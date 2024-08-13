// Dependencies
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Imports
import Landing from './views/landing/landing';
import Home from './views/home/home';
import Contact from './views/contact/contact';
import About from './views/about/about';

// Styles
// import banner from './assets/Untitled .jpg'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
