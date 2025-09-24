import React from 'react';
const Ausschreibungstext = 'Docs/Ausschreibungstext.docx';

const Ausschreibungstexte = () => {
  return (
    <div className="">
      <h1>Ausschreibungstexte FlexaKanal</h1>
       <a href={Ausschreibungstext} download="Ausschreibungstext_FlexaKanal.docx" className="download-button">
            Word herunterladen
          </a>
    </div>
  );
};

export default Ausschreibungstexte;

