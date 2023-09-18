import ItemsTable from "./ItemsTable";
import PromoCode from "./PromoCode";

const MainDisplay = () => {
  return (
    <>
      <section className="shipping-cart">
        <div className="container">
          <div className="innter-header">
            <h1 className="heading">Shopping Cart</h1>
          </div>
          <div className="row">
            <div className="col-lg-8 mt-4">
              <ItemsTable />
            </div>
            <div className="col-lg-4">
              <PromoCode />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainDisplay;
