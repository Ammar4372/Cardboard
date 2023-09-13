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
function ReelsPage() {
  return (
    <>
      <Card title="Types of Reels" />
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
