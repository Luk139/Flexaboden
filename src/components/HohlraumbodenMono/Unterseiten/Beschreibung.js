import React from 'react';
const image1 = './JPGs/HohlraumbodenMono1.jpg';
const image2 = './JPGS/HohlraumbodenMono2.jpg';
const BeschreibungDoc = '/HohlraumbodenMonoBeschreibung.doc';

const Beschreibung = () => {
  return (
    <div className="">
      <h1>Beschreibung</h1>
      <a href={BeschreibungDoc} download="Beschreibung_Hohlraumboden_Mono.doc" className="download-button">
        Word herunterladen
      </a>
      <div className="content-with-image">
        <div className="text-container">
          <h2>Grundlagen und Montage</h2>
          <p>
            Der <strong>Mono-Hohlraumboden</strong> war der erste Hohlraumboden als Alternative zu Doppelboden und Stahlblechkanälen. Der Transport der nestbaren tiefgezogenen Schalung ist einfach, ebenso wie ihre Montage. Da sie nicht begehbar ist, muss der Estrich von Trittböcken aus eingebracht werden.
          </p>
          <p>
            Bei größeren Aufbauhöhen (lichte Höhen von 40 bis 140 mm) ist die Austrocknungszeit hoch.
          </p>
          <h2>Belastbarkeit und Einsatzgebiete</h2>
          <p>
            Die Trittschallminderung ist mit ca. 10 dB niedrig. Die Belastbarkeit ist jedoch aufgrund der hohen Stützendichte und der Gewölbebildung mit <strong>&gt; 50 kN/m²</strong> höher als die der meisten Rohdecken.
          </p>
          <p>
            Die monolithische Schalung wird daher fast ausschließlich bei sehr niedrigen Bodenaufbauten (OKE min: 80 mm) oder bei hohen Belastungen eingesetzt.
          </p>
          <h2>Spezielle Anwendungen</h2>
          <p>
            Da die Schalung nur zwischen den Stützfüßen geschnitten werden kann, erfolgt das Anarbeiten an aufgehenden Wänden mit harter Dämmung. Dies gilt auch bei schrägen oder runden Wandanschlüssen.
          </p>
          <p>
            Aussparungen für Einbaueinheiten können mittels Schalkörpern oder durch nachträgliches Bohren hergestellt werden. Bei entsprechender Vorbehandlung der Rohdecke ist dieser Hohlraumboden auch für Lüftungszwecke einsetzbar. Bei gleichzeitiger Verwendung zur Verkabelung sind jedoch Brandmelder (alle 70 m²) vorgeschrieben.
          </p>
          <h2>Brandschutz und Normen</h2>
          <p>
            Aufgrund seiner Hohlraumhöhe von unter 200 mm und der Verwendung mineralischer Estriche der Baustoffklasse <strong>A1 nach DIN 4102</strong>, entspricht der Mono-Hohlraumboden brandschutztechnisch den Anforderungen der <strong>Musterbauordnung (MBO)</strong> und kann daher auch ohne besondere Prüfung in Fluchtwegen eingesetzt werden. Die Hohlraumbodenkonstruktion erfüllt die Anforderungen der Feuerwiderstandsklasse <strong>F 30</strong>.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image2} alt="Hohlraumboden Mono Details" className="hohlraumboden-mono-startpage img" />
                <img src={image1} alt="Hohlraumboden Mono Ansicht" className="hohlraumboden-mono-startpage img" />

      </div>
    </div>
  );
};

export default Beschreibung;