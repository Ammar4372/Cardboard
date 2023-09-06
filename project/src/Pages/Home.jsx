import Header from '../Component/Header'
import PaymentBanner from "../Component/PaymentBanner";
import Footer from "../Component/Footer";
import OurProducts from "../Component/Our-Products/OurProducts";
import OurPeople from "../Component/Our-People/OurPeople";
import BoxInspiration from "../Component/BoxInspirations/BoxInspirations";
import Nav from "../Component/Navbar/Nav";
const Home = () => {
  return (
    <>
     
      <Header />
      <OurProducts />
      <OurPeople />
      <BoxInspiration />
      
    </>
  );
};
export default Home;
