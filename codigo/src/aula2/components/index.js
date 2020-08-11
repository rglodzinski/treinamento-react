import React, { Component } from "react";

import NumberList from "./NumberList";
import NameForm from "./NameForm";
import TemperatureCalculator from "./TemperatureCalculator";
import SignUpDialog from "./SignUpDialog";
import FilterableProductTable from "./FilterableProductTable";

const PRODUCTS = [
  {
    category: "Artigos Esportivos",
    price: "R$ 95,00",
    stocked: true,
    name: "Bola de futebol"
  },
  {
    category: "Artigos Esportivos",
    price: "R$ 88,90",
    stocked: true,
    name: "Bola de basquete"
  },
  {
    category: "Artigos Esportivos",
    price: "R$ 29,99",
    stocked: false,
    name: "Kit Bolas de Tennis"
  },
  {
    category: "Eletrônicos",
    price: "R$ 750,00",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Eletrônicos",
    price: "R$ 5399,99",
    stocked: false,
    name: "iPhone X"
  },
  {
    category: "Eletrônicos",
    price: "R$ 1890,99",
    stocked: true,
    name: "Nexus 7"
  }
];

const SAMPLES = {
  NUMBER_LIST: "Lista de Números",
  NAME_FORM: "Formulário/Nome",
  TEMPERATURE_CALCULADOR: "Conversor de Temperatura",
  SIGNUP_DIALOG: "Cadastre-se",
  FILTERABLE_PRODUCT_TABLE: "Tabela de Pesquisa de Produto"
};

class ComponentesAula2 extends Component {
  state = {
    showSignUpDialog: false,
    selectedSample: SAMPLES.NUMBER_LIST
  };

  render() {
    const { showSignUpDialog, selectedSample } = this.state;

    const numbers = [
      {
        identificador: 1,
        value: "UM"
      },
      {
        identificador: 2,
        value: "DOIS"
      },
      {
        identificador: 3,
        value: "TRÊS"
      }
    ];

    const handleShowSignUpDialog = () => {
      this.setState((estadoAtual) => ({
        showSignUpDialog: !estadoAtual.showSignUpDialog
      }));
    };

    const renderComponent = () => {
      const {
        NUMBER_LIST,
        NAME_FORM,
        TEMPERATURE_CALCULADOR,
        SIGNUP_DIALOG,
        FILTERABLE_PRODUCT_TABLE
      } = SAMPLES;
      switch (selectedSample) {
        case NUMBER_LIST:
          return <NumberList items={numbers} />;
        case NAME_FORM:
          return <NameForm />;
        case TEMPERATURE_CALCULADOR:
          return <TemperatureCalculator />;
        case SIGNUP_DIALOG:
          return (
            <div>
              <button onClick={handleShowSignUpDialog}>
                Quero me Cadastrar
              </button>
              <SignUpDialog
                show={showSignUpDialog}
                id="dialog-signup"
                onClose={handleShowSignUpDialog}
              />
            </div>
          );
        case FILTERABLE_PRODUCT_TABLE:
          return <FilterableProductTable products={PRODUCTS} />;
        default:
          return <div>Erro</div>;
      }
    };

    const handleChangeSample = (event) => {
      this.setState({
        selectedSample: event.target.value
      });
    };

    const pageStyles = {
      padding: "10px"
    };

    return (
      <div style={pageStyles}>
        <fieldset>
          <legend>Selecione um Exemplo</legend>
          <select value={selectedSample} onChange={handleChangeSample}>
            {Object.keys(SAMPLES).map((element, ix) => (
              <option key={ix} value={SAMPLES[element]}>
                {SAMPLES[element]}
              </option>
            ))}
          </select>
        </fieldset>
        <br />
        <div>{renderComponent()}</div>
      </div>
    );
  }
}

export default ComponentesAula2;
