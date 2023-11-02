import { useEffect } from "react";
import ItemImageSlider from "../Product/ItemImageSlider";

import { useDispatch } from "react-redux";

const ReelDetail = ({ Product }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, [Product]);
  return (
    <>
      <section className="products-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-slider">
                <ItemImageSlider img="/img/reels_product_1.png" />
                <p className="mt-4">{Product?.description}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <h1 className="heading ">{Product?.type}</h1>
              <div className="inner-banner"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReelDetail;
