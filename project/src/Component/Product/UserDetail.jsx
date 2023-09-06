// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from "react";

const UserDetail = () => {
  const [quantity, setQuantity] = useState();
  const [color, setColor] = useState("");
  return (
    <>
      <section className="products-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-slider">
                <ul id="vertical">
                  <li data-thumb="img/image 13.png">
                    <img src="img/image 13.png" />
                  </li>
                  {/* <li data-thumb="img/reels_product_4.png">
                    <img src="img/reels_product_4.png" />
                  </li>
                  <li data-thumb="img/reels_product_3.png">
                    <img src="img/reels_product_3.png" />
                  </li>
                  <li data-thumb="img/reels_product_2.png">
                    <img src="img/reels_product_2.png" />
                  </li>
                  <li data-thumb="img/reels_product_5.png">
                    <img src="img/reels_product_5.png" />
                  </li> */}
                </ul>
              </div>
            </div>

            <div className=" offset-lg-1 col-lg-5">
              <h1 className="heading ">Local Kraft Roll</h1>
              <p className="mt-4">
                Virgin Kraft paper assembled outside of Pakistan with grammage
                of around 180-190.
              </p>
              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onClick={(e) => {
                    setQuantity(e.target.value);
                  }}
                >
                  <option selected>15</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Color</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onClick={(e) => {
                    setColor(e.target.value);
                  }}
                >
                  <option selected>Brown</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <button className="btn-brnad w-100 mt-4">PRODUCT PAGE</button>
                </div>
                <div className="col-lg-6">
                  <button className="btn-brnad w-100 mt-4">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UserDetail;
