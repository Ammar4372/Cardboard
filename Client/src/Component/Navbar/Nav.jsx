import List from "./Dropdown";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../Pages/ShoppingCart/CartSlice";
import { useSelector } from "react-redux"; 
function Nav() {
  const cart = useSelector(selectCartItems);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/img/logo.svg" />
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
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <List
                    header="Products"
                    items={[
                      { url: "/Cardboards", title: "CardBoard" },
                      { url: "/Reels", title: "Reels" },
                      { url: "/Rolls", title: "Rolls" },
                      { url: "/RequestQute", title: "Request-Qute" },
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
                  <Link to="/ShippingCart">
                    <img src="/img/cart.svg" />
                    <span>{cart.length}</span>
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
