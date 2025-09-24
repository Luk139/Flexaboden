import React from 'react';
const ArtikellistePdf = 'PDFs/Artikelliste.pdf';

const Artikelliste = () => {
  return (
    <div className="">
      <h1>Artikelliste</h1>
       <a href={ArtikellistePdf} download="Artikelliste_FlexaKanal.pdf" className="download-button">
            PDF herunterladen
          </a>
           <iframe 
        src={ArtikellistePdf} 
        style={{ width: '100%', height: '80vh', border: 'none' }} 
        title="Artikelliste PDF-Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default Artikelliste;