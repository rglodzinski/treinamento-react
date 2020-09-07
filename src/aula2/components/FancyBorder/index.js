import React from "react";

const FancyBorder = props => {
    const { color, ...rest } = props;
    return (
        <div className={props.className + " FancyBorder FancyBorder-" + color} {...rest} >
            {props.children}
        </div>
    );
};

export default FancyBorder;
