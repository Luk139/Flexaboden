import React from 'react';

// Pfade zu den Bildern
const klimaBodenImages = [
  'JPGs/Klimaboden1.jpg',
  'JPGs/Klimaboden2.jpg',
  'JPGs/Klimaboden3.jpg',
  'JPGs/Klimaboden4.jpg',
];

const Klimaboden = () => {
  return (
    <div className="sub-page-container">
      <div className="image-gallery">
        {klimaBodenImages.map((imagePath, index) => (
          <div key={index} className="gallery-image-wrapper">
            <img src={imagePath} alt={`Klimaboden ${index + 1}`} className="klimaboden-gallery-image" />
          </div>
        ))}
      </div>

      <div className="content-with-image">
        <div className="image-container">
       
        </div>
        
        <div className="text-container">
      
          <p>
            ClimaLevel Webseite <a href="http://www.climalevel.com/" target="_blank" rel="noopener noreferrer">http://www.climalevel.com/</a>
          </p>
          <p>
            Die heutige Bauweise mit großen Fensterflächen und hohen inneren Lasten 
            steht allzu oft als unüberwindliche Hürde vor der Technikplanung mit 
            Ihrem Ziel der „thermischen Behaglichkeit“. In vielen Gebäuden sorgen 
            die transparenten Außenbauteile für oft unerträgliche 
            Raum(luft)temperaturen.
          </p>
          <p>
            Den in diesem Zusammenhang richtigen Lösungsansatz der Bauteilkühlung optimiert ClimaLevel® durch zusätzliche Leistungsmerkmale:
          </p>
          {/* Liste der Leistungsmerkmale */}
          <ul>
            <li>Komfortkühlung durch die Kombination aus Flächenkühlung + Zuluft</li>
            <li>Luftmengen werden geringer und richten sich nach der Außenluftrate</li>
            <li>Im Heizfall sorgt die vergrößerte Tauscherfläche für extrem niedrige Heizmitteltemperaturen</li>
            <li>Einfache Möglichkeit der Verkabelung innerhalb der Systemtechnik</li>
            <li>Bodenaufbau inklusive Estrich ab 130 mm OKE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Klimaboden;