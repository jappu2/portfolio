import Navigation from './navigation'
import HomePage from './homePage'
import AboutMe from './about'
import Portfolio from './portfolio'
import ContactMe from './contact'

import {Route, Router, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
