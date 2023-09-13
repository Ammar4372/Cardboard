
import { useSelector,useDispatch } from "react-redux";
import { selectConfig, setDimension, setPrintedSides, setQuantity } from "../../Pages/CardBoardPage/CardBoardSlice";
const StandardSize = () => {
  const dispatch = useDispatch();
  const config = useSelector(selectConfig);
  
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-4">
          <h6></h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group">
            {/* L W D */}
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                dispatch(setDimension(e.target.value));
              }}
            >
              <option
                value={JSON.stringify({
                  length: 2.25,
                  width: 2.25,
                  depth: 0,
                })}
              >
                2.25’’ x 2.25’’
              </option>
              <option
                value={JSON.stringify(
                  { length: 2.25, width: 6, depth: 0 },
                  null,
                  1
                )}
              >
                2.25’’ x 6’’
              </option>
              <option
                value={JSON.stringify(
                  { length: 2.25, width: 2.25, depth: 6 },
                  null,
                  1
                )}
              >
                2.25’’ x 2.25’’ x 6’’
              </option>
            </select>
          </div>
        </div>

        <div className="col-lg-4">
          <h6>Printed Sides:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => dispatch(setPrintedSides(e.target.value))}
              value={config.printedSides}
            >
              <option value="4">Outside (4 Sides)</option>
              <option value="4">Inside (4 Sides)</option>
              <option value="8">Outside/Inside Both (8 Sides)</option>
              <option value="1">Top(1 Sides)</option>
              <option value="1">Bottom (1 Sides)</option>
              <option value="2">Top/Bottom Both (2 Sides)</option>
            </select>
          </div>
        </div>

        {/* Quantity */}
        <div className="col-lg-4">
          <h6>Quantity:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => dispatch(setQuantity(e.target.value))}
              value={config.quantity}
            >
              <option value='500'> 500</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4"></div>
        {/* Price Calculation */}
        <div className="col-12 col-lg-8">
          <div className=" final-price">
            <h5>
              $2.5 each <span>Subtotal: $610.40</span>
            </h5>
          </div>
        </div>
      </div>

        <div className="row design-option">
          <div className="col-lg-6">
            <h6>
              Already using our <a href="#">designing tool?</a>
            </h6>
            <button className="btn-brnad w-100" style={{marginLeft: '50%'}}> Add to Card</button>
          </div>
          <div className="col-lg-6">
            <h6>Ready to design your box online?</h6>
            {/* <button className="btn-brnad w-100">DESIGN NOW</button> */}
          </div>
        </div>

      <div className="form-footer">
        <p>
          Can’t find what you’re looking for? <a href="#">Get a Custom Quote</a>
        </p>
      </div>
    </>
  );
};
export default StandardSize;
