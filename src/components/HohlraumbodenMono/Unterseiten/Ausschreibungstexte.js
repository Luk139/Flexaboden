import React from 'react';
const Ausschreibungstext = '/AusschreibungstextMono.DOC';

const Ausschreibungstexte = () => {
  return (
    <div className="">
      <h1>Ausschreibungstexte Hohlraumboden Mono</h1>
       <a href={Ausschreibungstext} download="Ausschreibungstext_Hohlraumboden_Mono.docx" className="download-button">
            Word herunterladen
          </a>
    </div>
  );
};

export default Ausschreibungstexte;

