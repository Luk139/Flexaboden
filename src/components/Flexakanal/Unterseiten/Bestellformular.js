import React from 'react';
const BestellformularPdf25 = 'PDFs/FlexaKanal+Bestellformular+25+mm.pdf';
const BestellformularPdf35 = 'PDFs/FlexaKanal+Bestellformular+35+mm.pdf';
const BestellformularPdf45 = 'PDFs/FlexaKanal+Bestellformular+45+mm.pdf';

const Bestellformular = () => {
  return (
    <div className="">
      <h1>Bestellformular</h1>
       <a href={BestellformularPdf25} download="Bestellformular_FlexaKanal_25mm.pdf" className="download-button">
            FlexaKanal 25mm Bestellformular PDF herunterladen
          </a>
          <iframe 
        src={BestellformularPdf25} 
        className="pdf-viewer" 
        title="Bestellformular 25mm PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
          <a href={BestellformularPdf35} download="Bestellformular_FlexaKanal_35mm.pdf" className="download-button">
            FlexaKanal 35mm Bestellformular PDF herunterladen
          </a>
          <iframe 
        src={BestellformularPdf35} 
        className="pdf-viewer" 
        title="Bestellformular 35mm PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
          <a href={BestellformularPdf45} download="Bestellformular_FlexaKanal_45mm.pdf" className="download-button">
            FlexaKanal 45mm Bestellformular PDF herunterladen
          </a>
           <iframe 
        src={BestellformularPdf45} 
        className="pdf-viewer" 
        title="Bestellformular 45mm PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
         
    </div>
  );
};

export default Bestellformular;