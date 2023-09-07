const Cards = [
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Piza Boxes",
    minOrder: 1000,
    img: "img/cardboard_product_1.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Sleeved Mailer Box",
    minOrder: 1000,
    img: "img/cardboard_product_2.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Bungbee Large",
    minOrder: 1000,
    img: "img/cardboard_product_3.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Relocation Box",
    minOrder: 1000,
    img: "img/cardboard_product_4.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Home Application Box",
    minOrder: 1000,
    img: "img/cardboard_product_5.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Laptop Shipping Box",
    minOrder: 1000,
    img: "img/cardboard_product_6.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Show Box",
    minOrder: 1000,
    img: "img/cardboard_product_7.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Tray Box",
    minOrder: 1000,
    img: "img/cardboard_product_1.png",
  },
];
function Card({ title }) {
 
  return (
    <>
      <section className="products-type">
        <div className="container">
          <h1 className="heading">{title}</h1>
          <div className="row">
            {Cards.map((card, index) => {
              return (
                <>
                  <div key={`Card-${index}`} className="col-lg-3 col-container">
                    <div className="card">
                      <span className="bage">CUSTOMISABLE</span>
                      <div className="card-body">
                        <img className="img-fluid" src={card.img} />
                      </div>
                      <div className="hover-contant">
                        <p>{card.hoverContent}</p>
                        <button className="btn-brnad w-100 py-3">
                          VIEW PRODUCT
                        </button>
                      </div>
                    </div>
                    <h5>{card.name}</h5>
                    <p>Min. {card.minOrder} pieces</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
