import React from 'react';
const image1 = './JPGs/Schwerlast1.jpg';
const image2 = './JPGs/Schwerlast2.jpg';
const image3 = './JPGs/Schwerlast3.jpg';
const image4 = './JPGs/Schwerlast4.jpg';
const image5 = './JPGs/Schwerlast5.jpg';
const image6 = './JPGs/Schwerlast6.jpg';
const FlexaLiftSchwerlastPdf = 'PDFs/FlexaLiftSchwerlast.pdf'; 

const FlexaLiftSchwerlast = () => {
  const vorteileList = [
    'Stufenlos nivellierbare Kassetteneinheit für nassgepflegte Böden',
    'Für Bereiche mit hohem Publikumsverkehr, die mit schweren Reinigungsfahrzeugen oder Hubsteigern befahren werden',
    'Belastbar bis 30 kN',
    'Bis zu 12 Einbaugeräte in drei Höhen rastbar',
    'Trittschallgeschützte Stützfüße, Aufbauhöhe OKFF von 105 bis 255 mm',
    'Einfache und schnelle Montage ohne Bohren',
    'Einbaumass 310x310 mm, 228 x 228 mm',
    'Einbaubar in FlexaKanal Bodendosen, Hohlraumboden und Doppelboden',
    'Hochfeste CNC-Rahmenkonstruktion aus Aluminiumsonderprofil',
    'Kassettendeckel aus Edelstahl, Deckelhöhe 20 oder 30 mm, blind oder mit Tubusauslass',
  ];

  return (
    <div className="sub-page-container">
      <h1>FlexaLift Schwerlast</h1>
      <div className="vorteile-layout">
        <div className="vorteile-media">
          <a href={FlexaLiftSchwerlastPdf} download="Beschreibung_FlexaLift_Schwerlast.pdf" className="download-button">
            PDF herunterladen
          </a>
          <img src={image1} alt="FlexaLift 1" className="vorteile-image" />
          <img src={image2} alt="FlexaLift 2" className="vorteile-image" />
          <img src={image3} alt="FlexaLift 3" className="vorteile-image" />
          <img src={image4} alt="FlexaLift 4" className="vorteile-image" />
          <img src={image5} alt="FlexaLift 5" className="vorteile-image" />
          <img src={image6} alt="FlexaLift 6" className="vorteile-image" />
        </div>
        <div className="vorteile-content">
          <ul className="vorteile-list">
            {vorteileList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
           <iframe 
        src={FlexaLiftSchwerlastPdf} 
        style={{ width: '100%', height: '80vh', border: 'none' }} 
        title="FlexaLift Schwerlast PDF-Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
        </div>
      </div>
    </div>
  );
};

export default FlexaLiftSchwerlast;