import React, { useState } from 'react';

// Import all your sub-page components
import Vorteile from './Unterseiten/Vorteile';
import TechnischeDaten from './Unterseiten/TechnischeDaten';
import Systembeschreibung from './Unterseiten/Systembeschreibung';
import Montageanleitung from './Unterseiten/Montageanleitung';
import Artikelliste from './Unterseiten/Artikelliste';
import Bestellformular from './Unterseiten/Bestellformular';
import Ausschreibungstexte from './Unterseiten/Ausschreibungstexte';
import Details from './Unterseiten/Details';
const FlexaKanalImage = 'JPGs/FlexaKanalStartpage.jpg';
const FlexaKanal = () => {
  // Use state to keep track of the current sub-page
  const [currentPage, setCurrentPage] = useState('startpage'); 

  // Function to render the correct component based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'vorteile':
        return <Vorteile />;
      case 'technischeDaten':
        return <TechnischeDaten />;
      case 'systembeschreibung':
        return <Systembeschreibung />;
      case 'montageanleitung':
        return <Montageanleitung />;
      case 'artikelliste':
        return <Artikelliste />;
      case 'bestellformular':
        return <Bestellformular />;
      case 'ausschreibungstexte':
        return <Ausschreibungstexte />;
      case 'details':
        return <Details />;
      case 'startpage':
            default:
                // The default "startpage" with template content
                return (
                    <div className="startpage-content">
                      <h1>FlexaKanal</h1>
                        <img src={FlexaKanalImage} alt="FlexaKanal" className="flexa-kanal-image" />
                        <div className="startpage-text">
                            
                            
                        </div>
                    </div>
                );
    }
  };

  return (
    <div className="flexa-kanal-container">
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
              className={currentPage === 'vorteile' ? 'active' : ''}
              onClick={() => setCurrentPage('vorteile')}>Vorteile</button>
          </li>
          <li>
            <button 
              className={currentPage === 'technischeDaten' ? 'active' : ''}
              onClick={() => setCurrentPage('technischeDaten')}>Technische Daten</button>
          </li>
          <li>
            <button 
              className={currentPage === 'systembeschreibung' ? 'active' : ''}
              onClick={() => setCurrentPage('systembeschreibung')}>Systembeschreibung</button>
          </li>
          <li>
            <button 
              className={currentPage === 'montageanleitung' ? 'active' : ''}
              onClick={() => setCurrentPage('montageanleitung')}>Montageanleitung</button>
          </li>
          <li>
            <button 
              className={currentPage === 'artikelliste' ? 'active' : ''}
              onClick={() => setCurrentPage('artikelliste')}>Artikelliste</button>
          </li>
          <li>
            <button 
              className={currentPage === 'bestellformular' ? 'active' : ''}
              onClick={() => setCurrentPage('bestellformular')}>Bestellformular</button>
          </li>
          <li>
            <button 
              className={currentPage === 'details' ? 'active' : ''}
              onClick={() => setCurrentPage('details')}>Details FlexaKanal</button>
          </li>
          <li>
            <button 
              className={currentPage === 'ausschreibungstexte' ? 'active' : ''}
              onClick={() => setCurrentPage('ausschreibungstexte')}>Ausschreibungstexte</button>
          </li>
        </ul>
      </nav>

      <div className="flexa-kanal-content">
        {renderPage()}
      </div>
    </div>
  );
};

export default FlexaKanal;