import React from "react";

const NavigationWrapper = () => {
  return (
    <div className="col-lg-3 d-lg-block d-none navigation-wrapper pr-0">
      <ul className="navigation list-group list-group-flush scroll">
        <li className="menu-item list-group-item">
          <a href="#">
            <span>
              <img
                className="lazyload loaded"
                src="https://theme.hstatic.net/1000230347/1000729967/14/menu_icon_1.png?v=967"
                alt=""
              />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationWrapper;
