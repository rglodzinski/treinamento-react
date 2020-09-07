import React from "react";

import "./styles.css";

const Modal = props => {

    const { show, onClose, children, title } = props;

    const styles = {
        visibility: show ? "visible" : "hidden"
    };

    return (
        <div style={styles} className="modal-container">
            <div className="modal">
                <div className="modal-title">
                    {title}
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
