import React, { useState } from 'react';
// Import all your sub-page components
import Beschreibung from './Unterseiten/Beschreibung';
import TechnischeDaten from './Unterseiten/TechnischeDaten';
import Ausschreibungstexte from './Unterseiten/Ausschreibungstexte';
const HohlraumbodenZEImage = 'JPGs/HohlraumbodenZE.jpg';

const HohlraumbodenZE = () => {
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
                    <div className="startpage-content">
                                                    <h1>Hohlraumboden ZE</h1>

                        <img src={HohlraumbodenZEImage} alt="Hohlraumboden ZE" className="hohlraumboden-ze-image" />
        <div className="text-container">
                            
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="sub-page-container">
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

            <div className="hohlraumboden-ze-content">
                {renderPage()}
            </div>
        </div>
    );
};

export default HohlraumbodenZE;