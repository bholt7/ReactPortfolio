import {BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom'
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
        <Route path={process.env.PUBLIC_URL + '/ReactPortfolio/portfolio'} element={<Work/>}/>
        <Route path={process.env.PUBLIC_URL + '/ReactPortfolio/resume'} element={<Resume/>}/>
        <Route path={process.env.PUBLIC_URL + '/ReactPortfolio/contact'} element={<ContactPage/>}/>



      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
