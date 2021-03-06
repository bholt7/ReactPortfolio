import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import ContactPage from './pages/ContactPage';
import Resume from './pages/Resume';
import Work from './pages/Work';

function App() {
  return (
    
    <Router>
      <div classsName='app'>
      <NavBar/>
      <Footer/>
      <Routes>
        <Route path='/ReactPortfolio' element={<AboutMe/>}/>
        <Route path= '/ReactPortfolio/portfolio' element={<Work/>}/>
        <Route path= '/ReactPortfolio/resume' element={<Resume/>}/>
        <Route path= '/ReactPortfolio/contact' element={<ContactPage/>}/>



      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
