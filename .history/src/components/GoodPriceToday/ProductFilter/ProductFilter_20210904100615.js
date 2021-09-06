import React from "react";

const ProductFilter = () => {
  return (
    <aside className=" scroll card py-2 dqdt-sidebar sidebar left-content col-xl-3 col-lg-3 col-md-12 col-sm-12">
      <div className="filter-content aside-filter">
        <div className="filter-container">
          <div className="filter-container__selected-filter">
            <div className="filter-container__selected-filter-header clearfix d-none">
              <span className="filter-container__selected-filter-header-title">
                <i className="fa fa-arrow-left hidden-sm-up"></i>
                Bạn chọn
              </span>
              <a href="#" className="filter-container__clear-all">
                Bỏ hết <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>

          {/* Lọc hãng */}
          <aside className="aside-item filter-vendor">
            <div className="aside-title">
              <h2 className="title-head margin-top-0">
                <span>Thương hiệu</span>
              </h2>
            </div>
            <div className="aside-content filter-group">
                <ul>
                    <li className="filter-item filter-item--check-box filter-item--green
								   "
                </ul>
            </div>
          </aside>
        </div>
      </div>
    </aside>
  );
};

export default ProductFilter;
