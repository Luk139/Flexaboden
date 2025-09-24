import React from 'react';
const image1 = 'JPGs/FlexaLift1.jpg';
const image2 = 'JPGs/FlexaLift2.jpg';
const image3 = 'JPGs/FlexaLift3.jpg';
const image4 = 'JPGs/FlexaLift4.jpg';
const image5 = 'JPGs/FlexaLift5.jpg';
const image6 = 'JPGs/FlexaLift6.jpg';
const FlexaLiftPdf = 'PDFs/BeschreibungFlexaLift.pdf';

const FlexaLift = () => {
  const vorteileList = [
    'Stufenlos nivellierbare Kassetteneinheit für Parkett, Fliesen & Naturstein',
    'Bis zu 12 Einbaugeräte in drei Höhen rastbar',
    'Trittschallgeschützte Stützfüße, Aufbauhöhe OKFF von 95 bis 245 mm',
    'Einfache und schnelle Montage ohne Bohren, Einbaumass 310x310 mm, 228 x 228 mm',
    'Jederzeit nachnivellierbar (Parkettschliff), ausbaubar und nachrüstbar',
    'Elegantes Design, Öffnung mit verdecktem Auswerfer',
    'Einbaubar in FlexaKanal Bodendosen, Hohlraumboden und Doppelboden',
    'Hochfeste Rahmenkonstruktion aus Aluminium',
    'Durch CNC-Fertigung einfach ersetzbare Rahmenteile',
    'Kassettendeckel aus Edelstahl, 300x300 mm, 220x220 mm, Deckelhöhe 20, 30 oder 40 mm',
    'Preiswert (ca. 20% günstiger als alternative Produkte)'
  ];

  return (
    <div className="sub-page-container">
      <h1>FlexaLift</h1>
      <div className="vorteile-layout">
        <div className="vorteile-media">
          <a href={FlexaLiftPdf} download="Beschreibung_FlexaLift.pdf" className="download-button">
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
        src={FlexaLiftPdf} 
        style={{ width: '100%', height: '80vh', border: 'none' }} 
        title="FlexaLift PDF-Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
        </div>
      </div>
    </div>
  );
};

export default FlexaLift;