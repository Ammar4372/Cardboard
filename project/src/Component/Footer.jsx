import footerImg from '../../public/img/footer-logo.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <img className="footer-brand" src={footerImg} alt="Footer Logo" />
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-4">
                <h5>Packaging</h5>
                <ul>
                  <li><a href="#">Rolls</a></li>
                  <li><a href="#">Reels</a></li>
                  <li><a href="#">Cardboards</a></li>
                  
                </ul>
              </div>
              <div className="col-lg-4">
                <h5>Company</h5>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5>Help</h5>
                <ul>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Request a Quote</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright ©2023 Cardboard Package</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
