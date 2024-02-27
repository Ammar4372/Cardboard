import ItemImageSlider from "./ItemImageSlider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "../../Pages/CardBoardPage/CardBoardSlice";
import ProductDP from "../ProductDP/ProductDP";

const UserDetail = ({ Product, materials }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProduct(Product));
  }, []);

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
                <ProductDP Product={Product} materials={materials} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UserDetail;
