import React from "react";

const KeybordFocus = () => {
  return (
    <a
      href="https://portal.dataprev.gov.br"
      onClick={e => e.preventDefault()}
      onFocus={e => {
        e.preventDefault();
        console.log("Testes");
      }}
    >
      Teste de foco
    </a>
  );
};

export default KeybordFocus;
