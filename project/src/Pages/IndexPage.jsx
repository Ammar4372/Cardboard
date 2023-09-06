import PaymentBanner from "../Component/PaymentBanner";
import OurProducts from "../Component/Our-Products/OurProducts";
import OurPeople from "../Component/Our-People/OurPeople";
import BoxInspiration from "../Component/BoxInspirations/BoxInspirations";
import Header from "../Component/Header";

function IndexPage() {
  return (
    <>
      <Header />
      <OurProducts />
      <OurPeople />
      <BoxInspiration />
    </>
  );
}

export default IndexPage;
