import paymentImgs from "/img/payment_methods.png";
const PaymentBanner = () => {
  return (
    <div className="payment-method">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1>Payment Methods</h1>
            <p>
              You can choose from various popular payment methods on our
              website, and be assured that all transactions are 100% secure with
              SSL encryption.
            </p>
            <div className="method">
              <img
                className="img-fluid"
                src={paymentImgs}
                alt="Payment Methods"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBanner;
