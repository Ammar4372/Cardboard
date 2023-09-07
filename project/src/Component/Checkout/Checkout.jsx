function Checkout() {
  return (
    <>
      <section class="shipping-cart checkout-page">
        <div class="container">
          <div class="innter-header">
            <h1 class="heading">Checkout</h1>
          </div>
          <div class="row">
            <div class="col-lg-6 mt-4 chose-payment">
              <h4>Customer Information</h4>
              <div class="row">
                <div class="col-lg-4">
                  <label class="form-label">Emial</label>
                </div>
                <div class="col-lg-8">
                  <input
                    type="emial"
                    class="form-control"
                    name=""
                    placeholder="anonymous@gmail.com"
                  />
                </div>
                <div class="col-lg-4">
                  <label class="form-label">Full Name:</label>
                </div>
                <div class="col-lg-8">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    placeholder="Anonymous John"
                  />
                </div>
                <div class="col-lg-4">
                  <label class="form-label">Company:</label>
                </div>
                <div class="col-lg-8">
                  <input
                    type="emial"
                    class="form-control"
                    name=""
                    placeholder="Laptop Shippers"
                  />
                </div>
                <h4>Shipping Information</h4>
                <div class="col-lg-4">
                  <label class="form-label">Address:</label>
                </div>
                <div class="col-lg-8">
                  <input type="emial" class="form-control" name="" />
                </div>
                <div class="col-lg-4">
                  <label class="form-label">City:</label>
                </div>
                <div class="col-lg-8">
                  <input type="text" class="form-control" name="" />
                </div>
                <div class="col-lg-4">
                  <label class="form-label">State:</label>
                </div>
                <div class="col-lg-8">
                  <input type="text" class="form-control" name="" />
                </div>
                <div class="col-lg-4">
                  <label class="form-label">Zip Code:</label>
                </div>
                <div class="col-lg-8">
                  <input type="text" class="form-control" name="" />
                </div>
                <div class="col-lg-4">
                  <label class="form-label">Phone:</label>
                </div>
                <div class="col-lg-8">
                  <input type="text" class="form-control" name="" />
                </div>
                <h4>Payment</h4>
                <div class="payment-box">
                  <div class="box-head">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Credit card
                      </label>
                    </div>
                    <img src="/img/optionList.png" />
                  </div>
                  <div class="cardit-card">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="Card number"
                          />
                          <i class="fa-solid fa-lock"></i>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="Name on card"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="Expiration date (MM / YY)"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input type="text" class="form-control" name="" />
                          <i class="fa-solid fa-circle-info"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-box">
                    <div class="other-method">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          <img src="/img/payment-methods.png" />
                        </label>
                      </div>
                    </div>
                    <div class="other-method  border-0">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label class="form-check-label" for="flexRadioDefault3">
                          <img src="/img/payment-methods2.png" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <h4>Billing address</h4>
                <div class="card-box">
                  <div class="other-method">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Same as shipping address
                      </label>
                    </div>
                  </div>
                  <div class="other-method border-0">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label class="form-check-label" for="flexRadioDefault3">
                        Use a different billing address
                      </label>
                    </div>
                  </div>
                </div>
                <h4>Remember me</h4>
                <div class="card-box p-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                </div>
                <div class="final-pay-btn">
                  <a href="#" class="d-inline-block back-home my-4">
                    Return to shipping
                  </a>
                  <button class="btn-brnad my-4">PAY NOW</button>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h5>Order Details</h5>
                </div>
                <div class="card-body">
                  <div class="flex-info">
                    <h6>Mailer Boxes - 9.5" x 7.75" x 4"</h6>
                  </div>
                  <div class="flex-info">
                    <h6>Color - Brown</h6>
                  </div>
                  <div class="flex-info">
                    <h6></h6>
                    <img class="" src="/img/cardboard_product_6.png" />
                  </div>

                  <div class="flex-info">
                    <h6>Quantity</h6>
                    <h5>15</h5>
                  </div>
                  <div class="flex-info">
                    <h6>Unit Price</h6>
                    <h5>--- --</h5>
                  </div>
                  <div class="flex-info">
                    <h6>Shipping & Handling</h6>
                    <h5>15</h5>
                  </div>
                  <div class="flex-info">
                    <h6>Production Speed</h6>
                    <h5>15</h5>
                  </div>
                  <div class="flex-info">
                    <h6>Estimated Delivery Date</h6>
                    <h5>-- ---</h5>
                  </div>
                  <hr />
                  <div class="flex-info">
                    <h6>
                      <b>Subtotal</b>
                    </h6>
                    <h5>$125.95</h5>
                  </div>
                  <div class="flex-info">
                    <h6>
                      <b>Sales Tax</b>
                    </h6>
                    <h5>---</h5>
                  </div>
                  <hr />
                  <div class="flex-info totle">
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
