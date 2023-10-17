import OurProducts from "../Component/Our-Products/OurProducts";
import OurPeople from "../Component/Our-People/OurPeople";
import BoxInspiration from "../Component/BoxInspirations/BoxInspirations";
import Header from "../Component/Header";
import Container3DBox from "../Component/Container3DBox";
import { useDispatch, useSelector } from "react-redux";
import {getMaterials, getProducts, selectMaterials, selectProducts} from "./CardBoardPage/CardBoardSlice";
import { useEffect } from "react";
const images = [
  { src: "img/inspiration_small_1.png" },
  { src: "img/inspiration_small_2.png" },
  { src: "img/inspiration_big_1.png" },
  { src: "img/inspiration_big_2.png" },
  { src: "img/inspiration_small_3.png" },
  { src: "img/inspiration_small_4.png" },
];
function IndexPage() {
  const products = useSelector(selectProducts);
  const materials = useSelector(selectMaterials);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getMaterials());
  }, []);

  return (
    <>
      <Header />
      <OurProducts />
      <OurPeople />
      <div className=" h-100 py-3">
        <Container3DBox products={products} materials={materials} />
      </div>
      <BoxInspiration
        title="Box Inspirations"
        disc="Our mission is to provide packaging solutions that cater to
                businesses of all types. Whether you require custom retail
                packaging with your logo or corrugated cardboard mailers for
                your ecommerce business, we offer plenty of inspiration to help
                you create unique and personalized product packaging that fits
                your needs."
        images={images}
      />
    </>
  );
}

export default IndexPage;
