import React from "react";

import NavigationWrapperItem from "./NavigationWrapperItem/NavigationWrapperItem";
import "./NavigationWrapper.css";

const NavigationWrapper = (props) => {
  return (
    <div className={props.attachedClasses.join(" ")}>
      <ul className="navigation list-group list-group-flush scroll">
        <NavigationWrapperItem />
      </ul>
    </div>
  );
};

export default NavigationWrapper;
