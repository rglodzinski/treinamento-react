import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  getModalRootEl = () => {
    return document.getElementById("modal-root");
  };

  componentDidMount() {
    this.getModalRootEl().appendChild(this.el);
  }

  componentWillUnmount() {
    this.getModalRootEl().removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
    // return <div>{this.props.children}</div>;
  }
}

export default Modal;
