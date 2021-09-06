import React from "react";

import "./ModuleMain.css";

const ModuleMain = () => {
  return (
    <section className="section sec_tab ">
      <div className="container card py-2">
        <div className="title_module_main heading-bar d-flex justify-content-between align-items-center">
          <h2 className="heading-bar__title">Mô tả sản phẩm</h2>
        </div>
        <div className="rte product_getcontent py-3 pos-relative">
          <div id="content">
            <p>
              <strong>Thông Số Kỹ Thuật</strong>
            </p>
            <table className="mce-item-table table table-bordered table-parameter">
              <tbody>
                <tr className="row-info">
                  <td className="name-info">
                    <span>Thương hiệu</span>
                  </td>
                  <td className="content-info">
                    <strong>
                      <span>Colokit</span>
                    </strong>
                  </td>
                </tr>
                <tr className="row-info">
                  <td className="name-info">
                    <span>Trọng lượng</span>
                  </td>
                  <td className="content-info">
                    <span>96 gram</span>
                  </td>
                </tr>
                <tr className="row-info">
                  <td className="name-info">
                    <span>Chất liệu</span>
                  </td>
                  <td className="content-info">
                    <span>Thân bọc nhựa, ngòi sợi Polyester</span>
                  </td>
                </tr>
                <tr className="row-info">
                  <td className="name-info">
                    <span>Loại đầu bút</span>
                  </td>
                  <td className="content-info">
                    <span>1 cây / 1 đầu</span>
                  </td>
                </tr>
                <tr className="row-info">
                  <td className="name-info">
                    <span>Quy cách</span>
                  </td>
                  <td className="content-info">
                    <span>36 màu / hộp</span>
                  </td>
                </tr>
                <tr className="row-info">
                  <td className="name-info">
                    <span>Bảo quản</span>
                  </td>
                  <td className="content-info">
                    <span>Nơi khô ráo, tránh lửa</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              - Màu sắc tươi sáng. <br />- Có 36 màu khác nhau, thỏa thích sáng
              tạo.
            </p>
            <p>
              - Việc tự mình vẽ tranh và tô màu giúp cho khả năng tư duy và sự
              sáng tạo của bé phát triển tốt hơn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleMain;
