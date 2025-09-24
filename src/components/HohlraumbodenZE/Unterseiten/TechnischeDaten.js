import React from 'react';
const TechnischeDatenPdf = 'PDFs/HohlraumbodenZETeDaten.PDF';

const TechnischeDaten = () => {
  return (
    <div className="">
      <h1>Technische Daten</h1>
       <a href={TechnischeDatenPdf} download="Technische_Daten_Hohlraumboden_ZE.pdf" className="download-button">
            PDF herunterladen
          </a>
            <iframe 
        src={TechnischeDatenPdf} 
        className="pdf-viewer" 
        title="Technische Daten PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default TechnischeDaten;