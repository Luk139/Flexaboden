import React from 'react';
const Hohlraumboden3SPdf = 'PDFs/Hohlraumboden3S.pdf';

const Hohlraumboden3S = () => {
  return (
    <div className="">
      <h1>Hohlraumboden3S</h1>
       <a href={Hohlraumboden3SPdf} download="Hohlraumboden3S.pdf" className="download-button">
            PDF herunterladen
          </a>
           <iframe 
        src={Hohlraumboden3SPdf} 
        className="pdf-viewer" 
        title="Hohlraumboden 3S PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default Hohlraumboden3S;