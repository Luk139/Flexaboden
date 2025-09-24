import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Referenzen from './components/Referenzen';
import Contact from './components/Contact';
import FlexaKanal from './components/Flexakanal/FlexaKanal';
import Klimaboden from './components/Klimaboden/Klimaboden';
import Hohlraumboden3S from './components/Hohlraumboden3S/Hohlraumboden3S';
import HohlraumbodenZE from './components/HohlraumbodenZE/HohlraumbodenZE';
import HohlraumbodenMono from './components/HohlraumbodenMono/HohlraumbodenMono';
import Einbaueinheiten from './components/Einbaueinheiten/Einbaueinheiten';
import './App.css'; // This is the ONLY CSS file you need to import here


function MainNavigation() {
    const location = useLocation();

    return (
        <nav className="main-nav">
            <ul>
                
                <li>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Kontakt und Impressum</Link>
                </li>
                <li>
                    <Link to="/FlexaKanal" className={location.pathname === '/FlexaKanal' ? 'active' : ''}>FlexaKanal</Link>
                </li>
                <li>
                    <Link to="/Klimaboden" className={location.pathname === '/Klimaboden' ? 'active' : ''}>Klimaboden</Link>
                </li>
                <li>
                    <Link to="/Hohlraumboden3S" className={location.pathname === '/Hohlraumboden3S' ? 'active' : ''}>Hohlraumboden 3S</Link>
                </li>
                <li>
                    <Link to="/HohlraumbodenZE" className={location.pathname === '/HohlraumbodenZE' ? 'active' : ''}>Hohlraumboden ZE</Link>
                </li>
                <li>
                    <Link to="/HohlraumbodenMono" className={location.pathname === '/HohlraumbodenMono' ? 'active' : ''}>Hohlraumboden Mono</Link>
                </li>
                <li>
                    <Link to="/Einbaueinheiten" className={location.pathname === '/Einbaueinheiten' ? 'active' : ''}>Einbaueinheiten</Link>
                </li>
                <li>
                    <Link to="/Referenzen" className={location.pathname === '/Referenzen' ? 'active' : ''}>Referenzen</Link>
                </li>
            </ul>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <MainNavigation />
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<Contact />} />
                        <Route path="/Referenzen" element={<Referenzen />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/FlexaKanal" element={<FlexaKanal />} />
                        <Route path="/Klimaboden" element={<Klimaboden />} />
                        <Route path="/Hohlraumboden3S" element={<Hohlraumboden3S />} />
                        <Route path="/HohlraumbodenZE" element={<HohlraumbodenZE />} />
                        <Route path="/HohlraumbodenMono" element={<HohlraumbodenMono />} />
                        <Route path="/Einbaueinheiten" element={<Einbaueinheiten />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;