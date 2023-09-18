import BoxInspirations from "../Component/BoxInspirations/BoxInspirations";
import Card from "../Component/Card/Card";
const images = [
  { src: "img/reels_usage_small_1.png" },
  { src: "img/reels_usage_small_2.png" },
  { src: "img/reels_usage_big_1.png" },
  { src: "img/reels_usage_big_2.png" },
  { src: "img/reels_usage_small_3.png" },
  { src: "img/reels_usage_small_4.png" },
];
const Cards = [
  {
    description:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Piza Boxes",
    minOrder: 1000,
    img: "img/cardboard_product_1.png",
  },
  {
    description:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Sleeved Mailer Box",
    minOrder: 1000,
    img: "img/cardboard_product_2.png",
  },
  {
    description:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Bungbee Large",
    minOrder: 1000,
    img: "img/cardboard_product_3.png",
  },
  {
    description:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Relocation Box",
    minOrder: 1000,
    img: "img/cardboard_product_4.png",
  },
  {
    description:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Home Application Box",
    minOrder: 1000,
    img: "img/cardboard_product_5.png",
  },
  {
    description:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Laptop Shipping Box",
    minOrder: 1000,
    img: "img/cardboard_product_6.png",
  },
  {
    description:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Show Box",
    minOrder: 1000,
    img: "img/cardboard_product_7.png",
  },
  {
    description:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Tray Box",
    minOrder: 1000,
    img: "img/cardboard_product_1.png",
  },
];
function ReelsPage() {
  return (
    <>
      <section className="products-type">
        <div className="container">
          <h1 className="heading">Types of Reels</h1>
          <div className="row">
            {Cards.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </div>
        </div>
      </section>
      <BoxInspirations
        title="Reels Usage"
        disc="At the heart of our packaging solutions lies the versatile and
                dynamic roll. Our expertise in roll-based packaging allows us to
                provide practical solutions for all kinds of businesses. Whether
                you're looking to elevate your brand with custom retail
                packaging on rolls that showcase your logo, or need corrugated
                cardboard mailers on rolls to streamline your e-commerce
                operations, we're here to ignite your imagination and inspire
                your product."
        images={images}
      />
    </>
  );
}
export default ReelsPage;
