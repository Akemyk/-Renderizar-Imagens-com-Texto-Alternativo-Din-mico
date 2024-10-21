import React from 'react';

const Imagens = ({ imagens }) => { 
  return (
    <div>
      {imagens.map((imagem, index) => (
        <img
          key={index}
          src={imagem.url}
          alt={imagem.altText}
          style={{ width: '200px', height: 'auto', margin: '10px' }} 
        />
      ))}
    </div>
  );
};

export default Imagens; 
