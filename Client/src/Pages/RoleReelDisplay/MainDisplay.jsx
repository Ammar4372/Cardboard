import ItemImageSlider from "../../Component/Product/ItemImageSlider";
import MainDp from "./MainDp";

const MainDisplay = ({ Product }) => {

  return (
    <>
      <section className="products-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" >
              <div className="product-slider">
                <ItemImageSlider img={Product?.images} />
              </div>
            </div>

            <div className=" col-lg-6">
              <div className="inner-banner">
                <MainDp Product={Product} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainDisplay;
