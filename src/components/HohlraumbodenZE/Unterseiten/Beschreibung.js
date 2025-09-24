import React from 'react';
const BeschreibungPdf = 'PDFs/HohlraumbodenZEBeschreibung.pdf';

const Beschreibung = () => {
  return (
    <div className="">
      <h1>Beschreibung</h1>
       <a href={BeschreibungPdf} download="Beschreibung_Hohlraumboden_ZE.pdf" className="download-button">
            PDF herunterladen
          </a>
           <iframe 
        src={BeschreibungPdf} 
        className="pdf-viewer" 
        title="Beschreibung PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default Beschreibung;