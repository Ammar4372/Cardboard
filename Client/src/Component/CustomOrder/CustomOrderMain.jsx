import Description from "../Cardboard/Description";
import CustomOrderForm from "./CustomOrderForm";

const CustomOrderMain = ({ products, materials }) => {
  return (
    <>
      <div className="inner-banner bg-brown">
        <div className="container">
          <div className="row">
            <Description
              heading="Cardboards"
              description="Cardboard boxes are an essential component of the packaging
                industry, serving a wide range of purposes from storage and
                shipping to retail display and branding. These sturdy and
                lightweight boxes are made of corrugated cardboard, which
                consists of multiple layers of paperboard that provide excellent
                strength and durability."
              src="/img/cardboard_header_image.png"
            />
            <div className="col-lg-6">
              <CustomOrderForm products={products} materials={materials} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomOrderMain;
