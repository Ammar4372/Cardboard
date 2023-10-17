import { useEffect } from "react";
import Checkout from "../../Component/Checkout/Checkout";
function CheckoutPage() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  
  return (
    <>
      <Checkout />
    </>
  );
}
export default CheckoutPage;
