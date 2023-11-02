import { useDispatch, useSelector } from "react-redux";
import {
  resetRollConfig,
  selectRollConfig,
  setRoll,
  setRollPrice,
  setRollQuantity,
  setSize,
} from "../../Pages/RollsPage/RollsSlice";
import { useEffect } from "react";
import {
  addRollToCart,
  setTotalPrice,
} from "../../Pages/ShoppingCart/CartSlice";

const ConfigureRoll = ({ products }) => {
  const dispatch = useDispatch();
  const config = useSelector(selectRollConfig);
  const handleClick = () => {
    if (config.totalPrice) {
      const item = {
        id: config.item._id,
        name: config.item.Type,
        img: "/img/roll_product_1.png",
        size: config.size,
        quantity: config.quantity,
        pricePerPiece: config.pricePerPiece,
        price: config.totalPrice,
      };
      dispatch(addRollToCart(item));
      dispatch(resetRollConfig());
      dispatch(setTotalPrice());
    } else {
      alert("Please select all the Required field.");
    }
  };
  useEffect(() => {
    if (config.quantity && config.size) {
      const pricePerPiece = config.size * config.item.Rate;
      const price = config.quantity * pricePerPiece;
      dispatch(setRollPrice({ pricePerPiece, price }));
    }
  }, [config]);
  return (
    <>
      <div className="configure-price-card">
        <div className="card">
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
                    <h6>Type</h6>
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
                      Select A Option
                    </option>
                    {config.item?.Sizes?.map((item, index) => {
                      return (
                        <>
                          <option key={index} value={item.Size}>
                            {item.Size}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <h6>Quantity:</h6>
              </div>
              <div className="col-lg-8">
                <div className="form-group">
                  <input
                    list="quantity"
                    name="quantity"
                    className="form-control"
                    placeholder="Enter Quantity"
                    onChange={(e) => dispatch(setRollQuantity(e.target.value))}
                    value={config.quantity}
                  />

                  <datalist id="quantity">
                    <option value="500"></option>
                    <option value="1000"></option>
                    <option value="1500"></option>
                    <option value="2000"></option>
                  </datalist>
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
                Can’t find what you’re looking for?{" "}
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
