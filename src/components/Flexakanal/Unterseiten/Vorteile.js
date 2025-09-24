import React from 'react';

const vorteilePdf = 'PDFs/Vorteile.pdf';
const vorteileImage = 'JPGs/Vorteile.jpg';

const Vorteile = () => {
  const vorteileList = [
    'Enorme Material- und Lohnkosteneinsparung',
    'Minimale Transportaufwand',
    'So einfach wie LEGO-Stein-Bauen',
    'Flexibler Monteureinsatz, da notfalls ein einzelner Monteur ausreicht',
    'Geringes Lagervolumen, alle Bauteile auf engstem Raum stapelbar',
    'Durch ineinandergreifende Rippen ohne Abkleben estrichdicht',
    'Keine scharfen Kanten: Keine Handverletzungen, kein Entgraten erforderlich',
    'Runde Innenkanten schützen vor Leitungsschäden und Schirmungsfehlern',
    'Glatter Kanalboden ohne Absätze ermöglicht ein leichtes Einziehen der Leitungen',
    'Keine Brandschäden oder Glasschäden beim Flexen',
    'Halogenfreies Material',
    'Kein Potentialausgleich nach VDE 0100 erforderlich',
    'Kein Schweißen oder Erdungskabel',
    'Keine Schallbrücken in der Trittschalldämmung',
    'Geeignet für alle handelsübliche Einbaueinheiten',
    'Ca. 30% günstiger als Stahlblechkanäle'
  ];

  return (
    <div className="sub-page-container">
      <h1>Die Vorteile</h1>
      <div className="vorteile-layout">
     
        <div className="vorteile-content">
          <ul className="vorteile-list">
            {vorteileList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Dieser Block ist neu und außerhalb von .vorteile-layout */}
      <a href={vorteilePdf} download="Vorteile_FlexaKanal.pdf" className="download-button">
        PDF herunterladen
      </a>
      
      <iframe 
        src={vorteilePdf} 
        className="pdf-viewer" 
        title="Technische Daten PDF Vorschau"
      >
        <p>Dein Browser unterstützt keine iframes.</p>
      </iframe>
    </div>
  );
};

export default Vorteile;