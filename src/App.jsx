import './App.css';
import Imagens from './Imagens'; 

function App() {
  const imagens = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      altText: 'Imagem 1',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
      altText: 'Imagem 2',
    },
  ];

  return (
    <>
      <h1>Galeria de Imagens</h1>
      <Imagens imagens={imagens} /> 
    </>
  );
}

export default App;
