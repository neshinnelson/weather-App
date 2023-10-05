
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/HomePage/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about-us'} element={<AboutUs/>}/>
        <Route path={'/contact-us'} element={<ContactUs/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
