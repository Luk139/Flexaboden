import React from 'react';
const DatenPdf = 'PDFs/Daten.pdf';

const TechnischeDaten = () => {
  return (
    <div className="">
      <h1>Technische Daten</h1>
       <a href={DatenPdf} download="Daten_FlexaKanal.pdf" className="download-button">
            PDF herunterladen
          </a>
           <iframe 
        src={DatenPdf} 
        className="pdf-viewer" 
        title="Technische Daten PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default TechnischeDaten;