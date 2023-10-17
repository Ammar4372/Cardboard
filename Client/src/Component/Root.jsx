import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Footer from "./Footer";
import PaymentBanner from "./PaymentBanner";

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <PaymentBanner/>
      <Footer/>
    </>
  );
}
export default Root;