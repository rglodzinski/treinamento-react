import React from "react";
import FormularioFilho from "./FormularioFilho";
import FormularioPai from "./FormularioPai";

const Formulario = () => {
  return (
    <React.Fragment>
      <FormularioPai prefix="pai" totalInputs="400">
        <FormularioFilho />
      </FormularioPai>
    </React.Fragment>
  );
};

export default Formulario;
