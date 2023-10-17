import Merge from "../../Component/Cardboard/Merge";
import Card from "../../Component/Card/Card";
import BoxInspirations from "../../Component/BoxInspirations/BoxInspirations";
import { useDispatch, useSelector } from "react-redux";
import {
  getMaterials,
  getProducts,
  selectMaterials,
  selectProducts,
} from "./CardBoardSlice";
import { useEffect } from "react";

const images = [
  { src: "img/cardboard_inspiration_small_1.png" },
  { src: "img/cardboard_inspiration_small_2.png" },
  { src: "img/cardboard_inspiration_big_1.png" },
  { src: "img/cardboard_inspiration_big_2.png" },
  { src: "img/cardboard_inspiration_small_3.png" },
  { src: "img/cardboard_inspiration_small_4.png" },
];

function CardBoardPage() {
  const products = useSelector(selectProducts);
  const materials = useSelector(selectMaterials);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getMaterials());
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Merge products={products} materials={materials} />
      <section className="products-type">
        <div className="container">
          <h1 className="heading">Types of Cardboards</h1>
          <div className="row">
            {products?.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </div>
        </div>
      </section>
      <BoxInspirations
        title="Cardboards Inspirations"
        disc="Cardboard packaging is the cornerstone of our packaging
                solutions. Our mastery in crafting dynamic and adaptable
                packaging based on this versatile material enables us to deliver
                solutions that are both functional and innovative."
        images={images}
      />
    </>
  );
}
export default CardBoardPage;
