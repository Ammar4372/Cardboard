import { useSelector, useDispatch } from "react-redux";
import {
  selectCheckout,
  setCardName,
  setCardNumber,
  setClientCompany,
  setClientEmail,
  setClientName,
  setExpDate,
  setPhone,
  setShippingAddress,
  setShippingCity,
  setShippingState,
  setZip,
} from "../../Pages/Checkout/CheckoutSlice";
import { emptyCart, selectCartItems } from "../../Pages/ShoppingCart/CartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const checkout = useSelector(selectCheckout);
  const cart = useSelector(selectCartItems);
  const handleClick = () => {
    fetch("http://localhost:3001/orderDetails", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        client: checkout.client,
        shipping: checkout.shipping,
        payment: checkout.payment,
      }),
    })
      .then(async (res) => console.log(await res.json()))
      .catch((err) => console.log(err.message));
    dispatch(emptyCart());
  };
  return (
    <>
      <section className="shipping-cart checkout-page">
        <div className="container">
          <div className="innter-header">
            <h1 className="heading">Checkout</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mt-4 chose-payment">
              <h4>Customer Information</h4>
              <div className="row">
                <div className="col-lg-4">
                  <label className="form-label">Email</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="anonymous@gmail.com"
                    value={checkout.client.email}
                    onChange={(e) => dispatch(setClientEmail(e.target.value))}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label">Full Name:</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Anonymous John"
                    value={checkout.client.name}
                    onChange={(e) => dispatch(setClientName(e.target.value))}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label">Company:</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="emial"
                    className="form-control"
                    placeholder="Laptop Shippers"
                    value={checkout.client.company}
                    onChange={(e) => dispatch(setClientCompany(e.target.value))}
                  />
                </div>
                <h4>Shipping Information</h4>
                <div className="col-lg-4">
                  <label className="form-label">Address:</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="emial"
                    className="form-control"
                    value={checkout.shipping.address}
                    onChange={(e) =>
                      dispatch(setShippingAddress(e.target.value))
                    }
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label">City:</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    value={checkout.shipping.city}
                    onChange={(e) => dispatch(setShippingCity(e.target.value))}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label">State:</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    value={checkout.shipping.state}
                    onChange={(e) => dispatch(setShippingState(e.target.value))}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label">Zip Code:</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    value={checkout.shipping.zip}
                    onChange={(e) => dispatch(setZip(e.target.value))}
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label">Phone:</label>
                </div>
                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control"
                    value={checkout.client.phone}
                    onChange={(e) => dispatch(setPhone(e.target.value))}
                  />
                </div>
                <h4>Payment</h4>
                <div className="payment-box">
                  <div className="box-head">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Credit card
                      </label>
                    </div>
                    <img src="/img/optionList.png" />
                  </div>
                  <div className="cardit-card">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Card number"
                            value={checkout.payment.cardNumber}
                            onChange={(e) =>
                              dispatch(setCardNumber(e.target.value))
                            }
                          />
                          <i className="fa-solid fa-lock"></i>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name on card"
                            value={checkout.payment.cardName}
                            onChange={(e) =>
                              dispatch(setCardName(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Expiration date (MM / YY)"
                            value={checkout.payment.expDate}
                            onChange={(e) =>
                              dispatch(setExpDate(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" />
                          <i className="fa-solid fa-circle-info"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-box">
                    <div className="other-method">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          <img src="/img/payment-methods.png" />
                        </label>
                      </div>
                    </div>
                    <div className="other-method  border-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          <img src="/img/payment-methods2.png" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <h4>Billing address</h4>
                <div className="card-box">
                  <div className="other-method">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Same as shipping address
                      </label>
                    </div>
                  </div>
                  <div className="other-method border-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Use a different billing address
                      </label>
                    </div>
                  </div>
                </div>
                <h4>Remember me</h4>
                <div className="card-box p-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Default checkbox
                    </label>
                  </div>
                </div>
                <div className="final-pay-btn">
                  <a href="#" className="d-inline-block back-home my-4">
                    Return to shipping
                  </a>
                  <button className="btn-brnad my-4" onClick={handleClick}>
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h5>Order Details</h5>
                </div>
                <div className="card-body">
                  <div className="flex-info">
                    <h6>Mailer Boxes - 9.5" x 7.75" x 4"</h6>
                  </div>
                  <div className="flex-info">
                    <h6>Color - Brown</h6>
                  </div>
                  <div className="flex-info">
                    <h6></h6>
                    <img className="" src="/img/cardboard_product_6.png" />
                  </div>

                  <div className="flex-info">
                    <h6>Quantity</h6>
                    <h5>15</h5>
                  </div>
                  <div className="flex-info">
                    <h6>Unit Price</h6>
                    <h5>--- --</h5>
                  </div>
                  <div className="flex-info">
                    <h6>Shipping & Handling</h6>
                    <h5>15</h5>
                  </div>
                  <div className="flex-info">
                    <h6>Production Speed</h6>
                    <h5>15</h5>
                  </div>
                  <div className="flex-info">
                    <h6>Estimated Delivery Date</h6>
                    <h5>-- ---</h5>
                  </div>
                  <hr />
                  <div className="flex-info">
                    <h6>
                      <b>Subtotal</b>
                    </h6>
                    <h5>$125.95</h5>
                  </div>
                  <div className="flex-info">
                    <h6>
                      <b>Sales Tax</b>
                    </h6>
                    <h5>---</h5>
                  </div>
                  <hr />
                  <div className="flex-info totle">
                    <h6>Total</h6>
                    <h5>$125.95</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
