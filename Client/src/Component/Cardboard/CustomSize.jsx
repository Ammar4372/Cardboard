// import Swal from "sweetalert2";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectConfig,
  setDepth,
  setLength,
  setPrintedSides,
  setQuantity,
  setWidth,
} from "../../Pages/CardBoardPage/CardBoardSlice";
const CustomeSize = () => {
  const config = useSelector(selectConfig);
  const dispatch = useDispatch();
  // const check = () => {
  // if(length <= 0 && width <= 0 && depth <=0 ) {
  //     Swal.fire({
  //         title: " L W D Fields are Improper?",
  //         text: "Provide proper Data!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //       });
  // }
  // };
  return (
    <>
      {/* Length */}
      <div className="row">
        <div className="col-lg-4">
          <h6>Length:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group" style={{ border: "none" }}>
            <input
              className="form-control"
              type="text"
              id="integerInput"
              placeholder="0"
              value={config.dimension.length}
              onChange={(e) => dispatch(setLength(e.target.value))}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid black",
              }}
              required
            />
          </div>
        </div>
      </div>

      {/* Width */}
      <div className="row">
        <div className="col-lg-4">
          <h6>Width:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group" style={{ border: "none" }}>
            <input
              className="form-control"
              type="text"
              id="integerInput"
              placeholder="0"
              value={config.dimension.width}
              onChange={(e) => dispatch(setWidth(e.target.value))}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid black",
              }}
            />
          </div>
        </div>
      </div>

      {/* Depth */}
      <div className="row">
        <div className="col-lg-4">
          <h6>Depth:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group" style={{ border: "none" }}>
            <input
              className="form-control"
              type="text"
              id="integerInput"
              placeholder="0"
              value={config.dimension.depth}
              onChange={(e) => dispatch(setDepth(e.target.value))}
              style={{
                width: "98%",
                border: "none",
                borderBottom: "1px solid black",
              }}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <h6>Printed Sides:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => dispatch(setPrintedSides(e.target.value))}
              value={config.printedSides}
            >
              <option value="4">
                Outside (4 Sides)
              </option>
              <option value="4">Inside (4 Sides)</option>
              <option value="8">Outside/Inside Both (8 Sides)</option>
              <option value="1">Top(1 Sides)</option>
              <option value="1">Bottom (1 Sides)</option>
              <option value="2">Top/Bottom Both (2 Sides)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Quantity */}
        <div className="col-lg-4">
          <h6>Quantity:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => dispatch(setQuantity(e.target.value))}
              value={config.quantity}
            >
              <option selected value='500'>500</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4"></div>

        {/* Price Calculation */}
        <div className="col-12 col-lg-8">
          <div className=" final-price">
            <h5>
              $2.5 each <span>Subtotal: $610.40</span>
            </h5>
          </div>
        </div>

        <div className="row design-option">
          <div className="col-lg-6">
            <h6>
              Already using our <a href="#">designing tool?</a>
            </h6>
            <button
              className="btn-brnad w-100"
              onClick={() => {
                check();
              }}
              style={{marginLeft: '50%'}}

            >
              Add to Card
            </button>
          </div>
          <div className="col-lg-6">
            <h6>Ready to design your box online?</h6>
            {/* <button className="btn-brnad w-100">DESIGN NOW</button> */}
          </div>
        </div>
        <div className="form-footer">
          <p>
            Can’t find what you’re looking for?{" "}
            <a href="#">Get a Custom Quote</a>
          </p>
        </div>

        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        ></div>
      </div>
    </>
  );
};
export default CustomeSize;
