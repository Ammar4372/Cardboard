// import Logo from "img/logo.svg";
// import Cart from "img/cart.svg";
import List from "./Dropdown";
function Nav() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="img/logo.svg" />
            </a>
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
                  <List header="Products" />
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
                  <List header="Company" />
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
                  <img src="img/cart.svg" />
                  <span>1</span>
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
