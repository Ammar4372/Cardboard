

import ItemImageSlider from "./ItemImageSlider";
import ProductUserInput from "./ProductUserInput";

const UserDetail = () => {

  return (


    <>
      <section className="products-page" style={{margin:"0rem", padding:"0rem", paddingBottom:"10rem"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-slider">
              <ItemImageSlider/>
                
              </div>
            </div>

            <div className=" offset-lg-1 col-lg-5" >
              <h1 className="heading " >Local Kraft Roll</h1>
              <p className="mt-4">
                Virgin Kraft paper assembled outside of Pakistan with grammage
                of around 180-190.
              </p>
              <ProductUserInput/>           
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
