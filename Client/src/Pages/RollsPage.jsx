import Card from "../Component/Card/Card";
import BoxInspirations from "../Component/BoxInspirations/BoxInspirations";
const images = [
  { src: "/img/roll-inspiration_small_1 (1).png" },
  { src: "/img/roll-inspiration_small_1 (2).png" },
  { src: "/img/roll-inspiration_big_1 (1).png" },
  { src: "/img/roll-inspiration_big_1 (2).png" },
  { src: "/img/roll-inspiration_small_1 (3).png" },
  { src: "/img/roll-inspiration_small_1 (4).png" },
];
function RollsPage() {
  return (
    <>
      <Card title="Types of Rolls" />
      <BoxInspirations
        title="Roll Inspirations"
        disc="At the heart of our packaging solutions lies the versatile and dynamic roll. Our expertise in roll-based packaging allows us to provide practical solutions for all kinds of businesses. Whether you're looking to elevate your brand with custom retail packaging on rolls that showcase your logo, or need corrugated cardboard mailers on rolls to streamline your 
						e-commerce operations, we're here to ignite your imagination and inspire your product."
        images={images}
      />
    </>
  );
}
export default RollsPage;
