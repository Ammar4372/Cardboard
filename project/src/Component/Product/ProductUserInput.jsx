import CustomeSize from "./CustomSize";
import StandardSize from "./StandardSize";
import { useState } from "react";

const ProductUserInput = ()=>
{
    const [material, setMaterial] = useState("");
    const [thickness, setThickness] = useState(0);
    const [customSize, setCustomSize] = useState(false);
    return(<>
     <div className="configure-price-card" style={{display:'flex' , flexDirection:"column " ,gap :'1rem'}}>
        <div className="card" >
         
          {/* Card Body */}
          <div className="card-body" >
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
                    value={material}
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
                  onChange={(e) => setThickness(e.target.value)}
                  value={thickness}
                >
                  <option value= '3'>3 ply</option>
                  <option value="5">5 ply</option>
                  <option value="7">7 ply</option>
                  
                </select>
               
              

                </div>
              </div>

              {/* Size */}
              <div className="col-lg-4">
                <h6>Size (L x W x D):</h6>
              </div>

              <div className="col-lg-8"    
                             >
                

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
                      style={{backgroundColor:"white", color:'black', border:"1px solid black"}}
                    >
                      STANDARD 
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
                      style={{backgroundColor:"white", color:'black', border:"1px solid black"}}
                    >
                      CUSTOM
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

    </>)
}

export default ProductUserInput