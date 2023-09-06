const images = [
  { src: "img/cardboard_inspiration_small_1.png" },
  { src: "img/cardboard_inspiration_small_2.png" },
  { src: "img/cardboard_inspiration_big_1.png" },
  { src: "img/cardboard_inspiration_big_2.png" },
  { src: "img/cardboard_inspiration_small_3.png" },
  { src: "img/cardboard_inspiration_small_4.png" },
];
function CardBoardImgContent() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-6">
              <div className="img-wraper sm-img">
                <img
                  className="img-fluid w-100 "
                  src="img/cardboard_inspiration_small_1.png"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="img-wraper sm-img">
                <img
                  className="img-fluid w-100 "
                  src="img/cardboard_inspiration_small_2.png"
                />
              </div>
            </div>
          </div>
          <div className="img-wraper lg-img">
            <img
              className="img-fluid w-100 "
              src="img/cardboard_inspiration_big_1.png"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="img-wraper lg-img">
            <img
              className="img-fluid w-100"
              src="img/cardboard_inspiration_big_2.png"
            />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="img-wraper sm-img">
                <img
                  className="img-fluid w-100 "
                  src="img/cardboard_inspiration_small_3.png"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="img-wraper sm-img">
                <img
                  className="img-fluid w-100 "
                  src="img/cardboard_inspiration_small_4.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
export default CardBoardImgContent;
