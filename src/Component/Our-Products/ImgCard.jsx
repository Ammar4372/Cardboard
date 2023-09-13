import { Link } from "react-router-dom";
const ImgCard = () => {
  const cardsDetails = [
    {
      id: 1,
      heading: "Rolls",
      imgSrc: "img/image 13.png",
    },
    {
      id: 2,
      heading: "Reels",
      imgSrc: "img/reels 2.svg",
    },
    {
      id: 3,
      heading: "Cardboards",
      imgSrc: "img/image 11.svg",
    },
  ];

  return (
    <>
      <div className="row">
        {cardsDetails.map((e) => {
          return (
            <div className="col-lg-4 col-container" key={e.id}>
              <h4>{e.heading}</h4>
              <Link to={`/${e.heading}`}>
                <div className="card">
                  <div className="card-body">
                    <img className=" img-fluid w-100" src={e.imgSrc} />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImgCard;
