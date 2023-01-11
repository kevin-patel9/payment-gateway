import {BrowserRouter , Routes, Route}  from 'react-router-dom';
import { Home } from './page/Home/home';
import { About } from './page/About/about';
import { Contact } from './page/Contact/contact';
import { NavbarItem } from './component.jsx/navbar';
import { Footer } from './page/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarItem />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactUs' element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
