import React from 'react';
const Ausschreibungstext = '/HohlraumbodenZEAusschreibungstext.DOC';

const Ausschreibungstexte = () => {
  return (
    <div className="">
      <h1>Ausschreibungstexte Hohlraumboden ZE</h1>
       <a href={Ausschreibungstext} download="Ausschreibungstext_Hohlraumboden_ZE.docx" className="download-button">
            Word herunterladen
          </a>
    </div>
  );
};

export default Ausschreibungstexte;

