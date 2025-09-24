import React from 'react';
const SystembeschreibungPdf = 'PDFs/Systembeschreibung.pdf';

const Systembeschreibung = () => {
  return (
    <div className="">
      <h1>Systembeschreibung</h1>
       <a href={SystembeschreibungPdf} download="Systembeschreibung_FlexaKanal.pdf" className="download-button">
            PDF herunterladen
          </a>
           <iframe 
        src={SystembeschreibungPdf} 
        className="pdf-viewer" 
        title="Systembeschreibung PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default Systembeschreibung;