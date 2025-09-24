import React, { useState } from 'react';

// Import all your sub-page components
import Beschreibung from './Unterseiten/Beschreibung';
import TechnischeDaten from './Unterseiten/TechnischeDaten';
import Ausschreibungstexte from './Unterseiten/Ausschreibungstexte';
const HohlraumbodenMonoImage1 = 'JPGs/HohlraumbodenMonoStart.jpg';

const HohlraumbodenMono = () => {
    // State to keep track of the current sub-page
    const [currentPage, setCurrentPage] = useState('startpage');

    // Function to render the correct component based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'beschreibung':
                return <Beschreibung />;
            case 'technischeDaten':
                return <TechnischeDaten />;
            case 'ausschreibungstexte':
                return <Ausschreibungstexte />;
            case 'startpage':
            default:
                // The default "startpage" with template content
                return (
                    <div className="hohlraumboden-mono-startpage">
                        <h1>Hohlraumboden Mono</h1>
                            <p>
                                Der Hohlraumboden Typ Mono war die erste Hohlraumbodenart.
                                Man beachte das Computermodell!                            
                            </p>
                        <img src={HohlraumbodenMonoImage1} alt="Hohlraumboden Mono" className="hohlraumboden-mono-image" />
                        <div className="text-container">
                            
                           
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="hohlraumboden-mono-container">
            {/* The separate, internal navbar for this section */}
            <nav className="internal-nav">
                <ul>
                    <li>
                        <button 
                          className={currentPage === 'startpage' ? 'active' : ''}
                          onClick={() => setCurrentPage('startpage')}>Startseite</button>
                    </li>
                    <li>
                        <button 
                          className={currentPage === 'beschreibung' ? 'active' : ''}
                          onClick={() => setCurrentPage('beschreibung')}>Beschreibung</button>
                    </li>
                    <li>
                        <button 
                          className={currentPage === 'technischeDaten' ? 'active' : ''}
                          onClick={() => setCurrentPage('technischeDaten')}>Technische Daten</button>
                    </li>
                    <li>
                        <button 
                          className={currentPage === 'ausschreibungstexte' ? 'active' : ''}
                          onClick={() => setCurrentPage('ausschreibungstexte')}>Ausschreibungstexte</button>
                    </li>
                </ul>
            </nav>

            <div className="hohlraumboden-mono-content">
                {renderPage()}
            </div>
        </div>
    );
};

export default HohlraumbodenMono;