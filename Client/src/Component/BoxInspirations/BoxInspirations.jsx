import ImgGrid from "../ImgGrid/ImgGrid";


const BoxInspirations = ({title,disc,images}) => {
 
  return (
    <>
      <section className="box-inspirations">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="heading">{title}</h1>
              <p className="section-disc">
                {disc}
              </p>
            </div>
          </div>
          <div className="grid">
            <ImgGrid images={images.slice(0, 3)} start={1} key='1'/>
            <ImgGrid images={images.slice(3, 6).reverse()} start={4} key="4"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoxInspirations;
