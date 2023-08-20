import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2 class= "texto">Contador: {contador}</h2>
      <button type="button" class="btn btn-outline-info" onClick={incrementarContador}>Incrementar</button>
      <button type="button" class="btn btn-outline-info "onClick={decrementarContador}>Decrementar</button>
    </div>
  );
};

export default Contador;

