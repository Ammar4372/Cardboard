import Merge from "../../Component/Cardboard/Merge";
import Card from "../../Component/Card/Card";
import BoxInspirations from "../../Component/BoxInspirations/BoxInspirations";
const images = [
  { src: "img/cardboard_inspiration_small_1.png" },
  { src: "img/cardboard_inspiration_small_2.png" },
  { src: "img/cardboard_inspiration_big_1.png" },
  { src: "img/cardboard_inspiration_big_2.png" },
  { src: "img/cardboard_inspiration_small_3.png" },
  { src: "img/cardboard_inspiration_small_4.png" },
];
function CardBoardPage() {
  return (
    <>
      <Merge />
      <Card title="Types Of Cardboard"/>
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
