import { useState } from "react";
import StandardSize from "./StandardSize";
import CustomeSize from "./CustomSize";

const ConfigurePrice = () => {
  const [material, setMaterial] = useState("");
  const [thickness, setThickness] = useState(0);

  const [customSize, setCustomSize] = useState(false);
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
                    onChange={(e) => setMaterial(e.target.value)}
                  >
                    <option value="Dream Coat">Dream Coat</option>
                    <option value="White Coat">White Coat</option>
                    <option value="Kraft Coat">Kraft Coat</option>
                    

                    {console.log(material)}
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
                  onChange={(e) => setThickness(e.target.value)}
                >
                  <option value= '3'selected>3 ply</option>
                  <option value="5">5 ply</option>
                  <option value="7">7 ply</option>
                  
                </select>
                {console.log(thickness)}
              

                </div>
              </div>

              {/* Size */}
              <div className="col-lg-4">
                <h6>Size (L x W x D):</h6>
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
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      onClick={() => {
                        setCustomSize(false);
                      }}
                    >
                      STANDARD SIZES
                    </button>
                  </li>
                  <li className="nav-item" role="presentation" >
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      onClick={() => setCustomSize(true)}
                      
                    >
                      CUSTOM SIZES
                    </button>
                  </li>
                </ul>
              </div>
            </div>
{/* Conditional Rendering  */}
            {customSize ? <CustomeSize/> : <StandardSize />}
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfigurePrice;
