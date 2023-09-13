import StandardSize from "./StandardSize";
import CustomeSize from "./CustomSize";
import { selectConfig, setMaterial, setThickness } from "../../Pages/CardBoardPage/CardBoardSlice";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ConfigurePrice = () => {
  const dispatch = useDispatch()
  const config = useSelector(selectConfig);
  const [customSize,setCustomSize] = useState(false);
  return (
    <>
      <div className="configure-price-card">
        <div className="card">
          <div className="card-header">
            <h5>Configure & Price</h5>
            <a href="#">
              <img src="img/sahre.svg" /> Share
            </a>
          </div>
          {/* Card Body */}
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <h6>Material</h6>
              </div>
              {/* Material */}
              <div className="col-lg-8">
                <div className="form-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => dispatch(setMaterial(e.target.value))}
                    value={config.material}
                  >
                    <option value="Dream Coat">Dream Coat</option>
                    <option value="White Coat">White Coat</option>
                    <option value="Kraft Coat">Kraft Coat</option>
                  </select>
                </div>
              </div>

              {/* Thickness */}

              <div className="col-lg-4">
                <h6>Thickness:</h6>
              </div>
              <div className="col-lg-8">
                <div className="form-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => dispatch(setThickness(e.target.value))}
                    value={config.thickness}
                  >
                    <option value="3">3 ply</option>
                    <option value="5">5 ply</option>
                    <option value="7">7 ply</option>
                  </select>
                </div>
              </div>

              {/* config */}
              <div className="col-lg-4">
                <h6>config (L x W x D):</h6>
              </div>

              <div className="col-lg-8">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      aria-controls="pills-home"
                      aria-selected={!customSize ? "true" : "false"}
                      onClick={() => {
                        setCustomSize(false);
                      }}
                    >
                      STANDARD SIZES
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      aria-controls="pills-profile"
                      aria-selected={customSize ? "true" : "false"}
                      onClick={() => setCustomSize(true)}
                    >
                      CUSTOM SIZES
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {customSize ? <CustomeSize /> : <StandardSize />}
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfigurePrice;
