import React from 'react';
const Dammsicht = 'JPGs/Dammsicht.jpg';
const Rohdecke = 'JPGs/Rohdecke.jpg';

const Details = () => {
  return (
    <div className="">
      <h1>Details FlexaKanal</h1>
       <a>Estrich auf Dämmsicht</a>
       <img src={Dammsicht} alt="Estrich auf Dämmsicht" style={{ maxWidth: '100%', height: 'auto' }} />
       <a>Estrich auf Rohdecke</a>
       <img src={Rohdecke} alt="Estrich auf Rohdecke" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default Details;