// import Swal from "sweetalert2";

import { useState } from "react";
const CustomeSize = () => {
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [depth, setDepth] = useState();
  const [quantity, setQuantity] = useState();
  const [printedSides, setPrintedSides] = useState();

  const check = () => {
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
  };
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
              value={length}
              onChange={(e) => setLength(e.target.value)}
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
              value={width}
              onChange={(e) => setWidth(e.target.value)}
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
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
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
              onChange={(e) => setPrintedSides(e.target.value)}
            >
              <option selected value="4">
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
              onChange={(e) => setQuantity(e.target.value)}
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

 
      </div>
    </>
  );
};
export default CustomeSize;
