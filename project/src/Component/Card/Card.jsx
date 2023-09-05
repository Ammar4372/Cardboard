const Cards = [
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Fluting Roll",
    minOrder: 300,
    img: "img/cardboard_product_1.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Printed Mailer Box",
    minOrder: 300,
    img: "img/cardboard_product_2.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Fluting Roll",
    minOrder: 300,
    img: "img/cardboard_product_3.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Fluting Roll",
    minOrder: 300,
    img: "img/cardboard_product_4.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Fluting Roll",
    minOrder: 300,
    img: "img/cardboard_product_5.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Fluting Roll",
    minOrder: 300,
    img: "img/cardboard_product_6.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Fluting Roll",
    minOrder: 300,
    img: "img/cardboard_product_7.png",
  },
  {
    hoverContent:
      "Local Kraft Roll, 30 lbs (Pack of 6) - Quality Paper for Packing, Moving, Shipping, Crafts - 100% Recyclable Natural Kraft Wrapping Paper",
    name: "Fluting Roll",
    minOrder: 300,
    img: "img/cardboard_product_8.png",
  },
];
function Card() {
  return (
    <>
      <section className="products-type">
        <div className="container">
          <h1 className="heading">Types of Cardboards</h1>
          <div className="row">
            {Cards.map((card) => {
              return (
                <>
                  <div className="col-lg-3 col-container">
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
