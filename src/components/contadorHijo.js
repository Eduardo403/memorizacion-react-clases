import React from "react";
import { memo } from "react";

const ContadorHijo = ({ contador }) => {
  console.log("hijo de el contador padre ");
  return (
    <>
      <h2>ContadorHijo</h2>
      {contador}
    </>
  );
};

export default memo(ContadorHijo);
