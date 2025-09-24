import React from 'react';
const ElektrantenPdf = 'PDFs/Elektranten.pdf';

const Elektranten = () => {
  return (
    <div className="">
      <h1>Elektranten</h1>
    
      <a href={ElektrantenPdf} download="Elektranten.pdf" className="download-button">
        Elektranten Artikelliste als PDF herunterladen
      </a>
      
      
      <iframe 
        src={ElektrantenPdf} 
        style={{ width: '100%', height: '80vh', border: 'none' }} 
        title="Elektranten PDF-Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default Elektranten;