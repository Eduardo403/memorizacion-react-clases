import React, { useState, useCallback, useMemo } from "react";
import ContadorHijo from "./contadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");
  let superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 10000000000; i++) {
      numero++;
    }
    return numero;
  }, []);

  //const sumar = () => setContador(contador + 1);

  const sumar = useCallback(() => setContador(contador + 1), [contador]);
  // const resta = () => setContador(contador - 1);
  const resta = useCallback(() => setContador(contador - 1), [contador]);

  const handelInput = (e) => setInput(e.target.value);

  return (
    <>
      <h2>Contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={resta}>-</button>
      </nav>
      <input type="text" onChange={handelInput} value={input} />
      <ContadorHijo contador={contador} />
      <h3>{superNumero}</h3>
    </>
  );
};

export default Contador;
