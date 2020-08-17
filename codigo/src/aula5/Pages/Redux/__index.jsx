import React from "react";
import { connect } from "react-redux";
import { somar } from "../../redux/reducers/contador.reducer";

const SomarPage = props => {
  return (
    <div>
      <p>Contador: {props.contador}</p>
      <br />
      <button onClick={() => props.somar(10)}>Somar 10</button>
    </div>
  );
};

const mapStateToProps = state => ({
  contador: state.contador
});

const mapDispatchToProps = { somar };

export default connect(mapStateToProps, mapDispatchToProps)(SomarPage);
