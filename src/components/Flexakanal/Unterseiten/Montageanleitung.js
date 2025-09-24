import React from 'react';
const MontageanleitungPdf = 'PDFs/Montageanleitung.pdf';

const Montageanleitung = () => {
  return (
    <div className="">
      <h1>Montageanleitung</h1>
       <a href={MontageanleitungPdf} download="Montageanleitung_FlexaKanal.pdf" className="download-button">
            PDF herunterladen
          </a>
           <iframe 
        src={MontageanleitungPdf} 
        className="pdf-viewer" 
        title="Montageanleitung PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default Montageanleitung;