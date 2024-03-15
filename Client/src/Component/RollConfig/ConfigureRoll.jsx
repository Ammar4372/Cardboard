import { useDispatch, useSelector } from "react-redux";
import {
  resetRollConfig,
  selectRollConfig,
  setRoll,
  setRollPrice,
  setRollQuantity,
  setSize,
  setType,
} from "../../Pages/RollsPage/RollsSlice";
import { useEffect, useState } from "react";
import {
  addRollToCart,
  setTotalPrice,
} from "../../Pages/ShoppingCart/CartSlice";

const ConfigureRoll = ({ products }) => {
  const dispatch = useDispatch();
  const config = useSelector(selectRollConfig);
  const [sizes, setSizes] = useState([])

  const handleClick = () => {
    if (config.totalPrice) {
      const item = {
        id: config.item._id,
        name: config.item.Type,
        img: config.item.images[0],
        size: config.size,
        type: config.type,
        quantity: config.quantity,
        pricePerPiece: config.pricePerPiece,
        price: config.totalPrice,
      };
      dispatch(addRollToCart(item));
      dispatch(resetRollConfig());
      dispatch(setTotalPrice());
    } else {
      alert("Please select all the required field.");
    }
  };

  useEffect(() => {
    if (config.quantity && config.size) {
      const pricePerPiece = config.size * config.item.Rate;
      const price = config.quantity * pricePerPiece;
      dispatch(setRollPrice({ pricePerPiece, price }));
    }
    if (config.quantity == 0) {
      dispatch(setRollPrice({ pricePerPiece: 0, price: 0 }));
    }
  }, [config]);

  useEffect(() => {
    if(config.item.Sizes) {
      setSizes(config.item.Sizes[config.type])
    }
  }, [config])

  return (
    <>
      <div className="configure-price-card">
        <div className="card" style={{width:"100%"}}>
          <div className="card-header">
            <h5>Configure & Price</h5>
            <a href="#">
              <img src="/img/sahre.svg" /> Share
            </a>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              {products ? (
                <>
                  <div className="col-lg-4">
                    <h6>Product:</h6>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <select
                        className="form-select"
                        value={config.item ? config.item.Type : config.item}
                        onChange={({ target }) =>
                          dispatch(
                            setRoll(
                              products.find((p) => p.Type === target.value)
                            )
                          )
                        }
                      >
                        <option value="" hidden>
                          Select A Option
                        </option>
                        {products.map((product, index) => {
                          return (
                            <option key={index} value={product.Type}>
                              {product.Type}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              <div className="col-lg-4">
                <h6>Type:</h6>
              </div>
              <div className="col-lg-8">
                <div className="form-group">
                  <div
                    className="form-check form-check-inline"
                    style={{ margin: "0 .5rem" }}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Type"
                      id="inlineRadio2"
                      onChange={() => dispatch(setType("thin"))}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Thin
                    </label>
                    <div
                      className="form-check form-check-inline"
                      style={{ margin: "0 .5rem" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Type"
                        id="inlineRadio1"
                        onChange={() => dispatch(setType("thick"))}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Thick
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <h6>Size:</h6>
              </div>
              <div className="col-lg-8">
                <div className="form-group">
                  <select
                    className="form-select"
                    value={config.size}
                    onChange={({ target }) => {
                      dispatch(setSize(target.value));
                    }}
                  >
                    <option value="" hidden>
                      Select an option
                    </option>
                    {
                      sizes?.map((size)=>(
                        <option value={size.Size}>{size.Size}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <h6>Quantity:</h6>
              </div>
              <div className="col-lg-8">
                <div className="form-group">
                  <input
                    className="form-control border-0"
                    type="number"
                    min={500}
                    step={500}
                    name="quantity"
                    placeholder="Enter Quantity"
                    onChange={(e) => dispatch(setRollQuantity(e.target.value))}
                    value={config.quantity}
                  />
                </div>
              </div>

              <div className="col-4"></div>
              <div className="col-12 col-lg-8">
                <div className=" final-price">
                  <h5>
                    Rs {config.pricePerPiece} each
                    <span>Subtotal: Rs {config.totalPrice}</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row justify-content-center design-option">
              <button className="btn-brnad w-50" onClick={handleClick}>
                Add to Cart
              </button>
            </div>
            <div className="form-footer">
              <p>
                Can’t find what you’re looking htmlFor?{" "}
                <a href="#">Get a Custom Quote</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfigureRoll;
