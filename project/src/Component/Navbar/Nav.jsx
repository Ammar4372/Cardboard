import List from "./Dropdown";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'>
              <img src="img/logo.svg" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <List
                    header="Products"
                    items={[
                      { url: "/CardBoard", title: "CardBoard" },
                      { url: "/Reel", title: "Reels" },
                      { url: "/Roll", title: "Rolls" },
                      { url: "/ProductDisplay", title: "ProductDisplay" },
                      { url: "/RequestQute", title: "Request-Qute" },
                      {url : '/ShippingCart', title: 'ShippingCart'},
                      {url : '/Checkout', title: 'Checkout'},
                     
                    ]}
                  />
                </li>

                <li className="nav-item">
                  <a className="nav-link">Resources</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Quote
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <List
                    header="Company"
                    items={[
                      { url: "", title: "CardBoard" },
                      { url: "", title: "CardBoard" },
                    ]}
                  />
                </li>
              </ul>
              <form className="user-area">
                <div className="search-area">
                  <button className="btn btn-search" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                  <div className="search-box d-none">
                    <a className="close-btn">
                      <i className="fa-solid fa-circle-xmark"></i>
                    </a>
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div className="cart-btn">
                  <Link to='/Product-Details'>
                    <img src="img/cart.svg" />
                    <span>1</span>
                  </Link>
                </div>
                <div className="sign-in">
                  <a href="#">Sign In</a>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
