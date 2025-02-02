import ItemImageSlider from "../../Component/Product/ItemImageSlider";
import MainDp from "./MainDp";
import { selectImages } from '../ReelsPage/ReelsSlice';
import { useSelector } from "react-redux";

const MainDisplay = () => {

  const imgArr = useSelector(selectImages);

  return (
    <>
      <section className="products-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" >
              <div className="product-slider">
                <ItemImageSlider img={imgArr} />
              </div>
            </div>

            <div className=" col-lg-6">
              <div className="inner-banner">
                <MainDp />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainDisplay;
