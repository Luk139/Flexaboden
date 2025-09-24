import React from 'react';
const ReferenzenPDF = 'PDFs/Referenzen.pdf';

const Referenzen = () => {
  return (
    <div className="">
      <h1>Referenzen</h1>
      {/* Download-Button */}
      <a href={ReferenzenPDF} download="Referenzen.pdf" className="download-button">
        Referenzen Artikelliste als PDF herunterladen
      </a>
      
      {/* PDF-Einbettung */}
      <iframe
        src={ReferenzenPDF}
        style={{ width: '100%', height: '80vh', border: 'none' }}
        title="Referenzen PDF-Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default Referenzen;