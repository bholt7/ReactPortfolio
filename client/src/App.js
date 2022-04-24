import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Work from './pages/Work';

function App() {
  return (
    
    <Router>
      <div classsName='app'>
      <NavBar/>
      <Footer/>
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/portfolio' element={<Work/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>



      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
