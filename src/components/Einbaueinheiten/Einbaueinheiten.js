import React, { useState } from 'react';

import FlexaLift from './Unterseiten/FlexaLift';
import FlexaLiftSchwerlast from './Unterseiten/FlexaLiftSchwerlast';
import Elektranten from './Unterseiten/Elektranten';

const EinbaueinheitenImage1 = './JPGs/Einbaueinheiten1.jpg';
const EinbaueinheitenImage2 = './JPGs/Einbaueinheiten2.jpg';

const Einbaueinheiten = () => {
    const [currentPage, setCurrentPage] = useState('startpage');

    const renderPage = () => {
        switch (currentPage) {
            case 'flexaLift':
                return <FlexaLift />;
            case 'flexaLiftSchwerlast':
                return <FlexaLiftSchwerlast />;
            case 'elektranten':
                return <Elektranten />;
            case 'startpage':
            default:
                return (
                    <div className="hohlraumboden-mono-startpage">
                        <h1>Einbaueinheiten</h1>
                            <p>
                            Unsere Unterflurverkabelungssysteme sind kompatibel mit den Einbaueinheiten europäischer Hersteller.
                            Neben unseren eigenen Kassetteneinbaueinheiten "FlexaLift" und "FlexaLift Schwerlast" sind bei uns auch die Kunststoffeinbaueinheiten von Hager/Electraplan erhältlich.
                            </p>
                        <div className="image-gallery">
                            <div className="gallery-image-wrapper">
                                <img src={EinbaueinheitenImage1} alt="Einbaueinheiten" className="klimaboden-gallery-image" />
                            </div>
                            <div className="gallery-image-wrapper">
                                <img src={EinbaueinheitenImage2} alt="Einbaueinheiten" className="klimaboden-gallery-image" />
                            </div>
                        </div>
        <div className="text-container">
                            
                            
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="einbaueinheiten-container">
            <nav className="internal-nav">
                <ul>
                    <li>
                        <button 
                            className={currentPage === 'startpage' ? 'active' : ''}
                            onClick={() => setCurrentPage('startpage')}>Startseite</button>
                    </li>
                    <li>
                        <button 
                            className={currentPage === 'flexaLift' ? 'active' : ''}
                            onClick={() => setCurrentPage('flexaLift')}>FlexaLift</button>
                    </li>
                    <li>
                        <button 
                            className={currentPage === 'flexaLiftSchwerlast' ? 'active' : ''}
                            onClick={() => setCurrentPage('flexaLiftSchwerlast')}>FlexaLift Schwerlast</button>
                    </li>
                    <li>
                        <button 
                            className={currentPage === 'elektranten' ? 'active' : ''}
                            onClick={() => setCurrentPage('elektranten')}>Elektranten</button>
                    </li>
                </ul>
            </nav>
            <div className="einbaueinheiten-content">
                {renderPage()}
            </div>
        </div>
    );
};

export default Einbaueinheiten;