import ItemImageSlider from "./ItemImageSlider";

import ConfigurePrice from "../Cardboard/ConfigurePrice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "../../Pages/CardBoardPage/CardBoardSlice";
const UserDetail = ({ Product, materials }) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setProduct(Product))
  },[])
  return (
    <>
      <section className="products-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-slider">
                <ItemImageSlider img={Product.img} />
              </div>
            </div>

            <div className=" col-lg-6">
              <h1 className="heading ">{Product.cardboardname}</h1>
              <p className="mt-4">{Product.description}</p>
              <div className="inner-banner">
                <ConfigurePrice products={null} materials={materials} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UserDetail;
