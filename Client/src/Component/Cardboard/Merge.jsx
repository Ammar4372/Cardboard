import ConfigurePrice from "./ConfigurePrice";
import Description from "./Description";

const Merge = ({products,materials}) => {
  return (
    <>
      <div className="inner-banner bg-brown"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Description />
            </div>
            <div className="col-lg-6">
              <ConfigurePrice products={products} materials={materials}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Merge;
