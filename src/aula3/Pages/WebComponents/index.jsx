import React from "react";
// import "@polymer/paper-badge/paper-badge.js";
import "smart-webcomponents-community/source/modules/smart.accordion";
import "smart-webcomponents-community/source/styles/smart.default.css";

const WebComponents = () => {
  return (
    <div>
      <smart-accordion id="accordion">
        <smart-accordion-item
          label="Item 1"
          content="Content 1"
          expanded
        ></smart-accordion-item>
        <smart-accordion-item
          label="Item 2"
          content="Content 2"
        ></smart-accordion-item>
        <smart-accordion-item
          label="Item 3"
          content="Content 3"
        ></smart-accordion-item>
      </smart-accordion>
    </div>
  );
};

export default WebComponents;
