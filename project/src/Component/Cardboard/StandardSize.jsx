import { useState } from "react";
const StandardSize = () => {
  const [dimension, setDimension] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [printedSides, setPrintedSides] = useState(0);
  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h6></h6>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                {/* L W D */}
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setDimension(JSON.parse(e.target.value));
                  }}
                >
                  <option
                    value={JSON.stringify({
                      length: 2.25,
                      width: 2.25,
                      depth: 0,
                    })}
                  >
                    2.25’’ x 2.25’’
                  </option>
                  <option
                    value={JSON.stringify(
                      { length: 2.25, width: 6, depth: 0 },
                      null,
                      1
                    )}
                  >
                    2.25’’ x 6’’
                  </option>
                  <option
                    value={JSON.stringify(
                      { length: 2.25, width: 2.25, depth: 6 },
                      null,
                      1
                    )}
                  >
                    2.25’’ x 2.25’’ x 6’’
                  </option>
                </select>
              </div>
            </div>

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
                  <option value="4">Outside (4 Sides)</option>
                  <option value="4">Inside (4 Sides)</option>
                  <option value="8">Outside/Inside Both (8 Sides)</option>
                  <option value="1">Top(1 Sides)</option>
                  <option value="1">Bottom (1 Sides)</option>
                  <option value="2">Top/Bottom Both (2 Sides)</option>
                </select>
              </div>
            </div>

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
                  value={quantity}
                >
                  <option>250</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
        </div>

        <div className="row design-option">
          <div className="col-lg-6">
            <h6>
              Already using our <a href="#">designing tool?</a>
            </h6>
            <button className="btn-brnad w-100">UPLOAD & ORDER NOW</button>
          </div>
          <div className="col-lg-6">
            <h6>Ready to design your box online?</h6>
            <button className="btn-brnad w-100">DESIGN NOW</button>
          </div>
        </div>

        <div className="form-footer">
          <p>
            Can’t find what you’re looking for?{" "}
            <a href="#">Get a Custom Quote</a>
          </p>
        </div>
      </div>

      <div
        className="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      ></div>
    </>
  );
};
export default StandardSize;
