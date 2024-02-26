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
          <div className=" d-flex justify-content-between align-items-center flex-row gap-4 ">
            <div className=" flex-grow-1">
              <ItemsTable />
            </div>
            <div className=" flex-grow-0 ">
              <PromoCode />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainDisplay;
