import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Cart() {
  return (
    <>
      <section className="shipping-cart product-details">
        <div className="container">
          <div className="innter-header">
            <h1 className="heading">Shopping Cart</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 mt-4">
              <h5>Custom Mail Box</h5>
              <p>Your custom designed 3d box is ready</p>
              <div className="img-wraper">
                <img className="img-fluid" src="/img/cardboard_product_6.png" />
              </div>
            </div>
            <div className="col-lg-4 product-info py-4">
              <div className="flex-info">
                <h5>Project:</h5>
                <p>My brown mailbox</p>
              </div>
              <div className="flex-info">
                <h5>Size (LxWxD):</h5>
                <p>26.5 x 19.5 x 6 cm / 15.8 cm</p>
              </div>
              <div className="flex-info">
                <h5>Material:</h5>
                <p>White</p>
              </div>
              <div className="flex-info">
                <h5>Printed Slides:</h5>
                <p>Outside</p>
              </div>
              <div className="flex-info">
                <h5>Production Speed:</h5>
                <p>Standard (7 - 12 Business Days)</p>
              </div>
              <h4>Details & Pricing</h4>
              <div className="flex-info">
                <h5>Unit Cost:</h5>
                <p>$5.32</p>
              </div>
              <div className="flex-info">
                <h5>Quantity</h5>
                <input type="text" className="form-control" value="16" name="" />
              </div>
              <div>
                <a className="action-btn" href="#">
                  <FontAwesomeIcon icon={faTrashCan}/> Remove
                </a>
                <a className="action-btn" href="#">
                  <FontAwesomeIcon icon={faPencil}/> Edit Design
                </a>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Promo Code"
                      name=""
                    />
                  </div>
                  <div className="flex-info">
                    <h6>Subtotal</h6>
                    <h5>$125.90</h5>
                  </div>
                  <div className="text-center">
                    <button className="btn-brnad mt-4 w-100 py-3">
                      PROCEED TO CHECKOUT
                    </button>
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
export default Cart;