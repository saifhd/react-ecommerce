import { Route, Routes } from 'react-router-dom';
import TheNav from './components/TheNav';
import About from './pages/About';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <TheNav/>
      <div className='py-8 px-16'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
