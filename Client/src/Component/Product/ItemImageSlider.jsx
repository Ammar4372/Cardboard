import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ItemImageSlider = ({img}) => {
  return (
    <>
      <Carousel>
        <div>
          <img src={img} />
        </div>
        <div>
          <img src="/img/cardboard_product_2.png" />
        </div>
        <div>
          <img src="/img/cardboard_product_3.png" />
        </div>
      </Carousel>
    </>
  );
};
export default ItemImageSlider;
