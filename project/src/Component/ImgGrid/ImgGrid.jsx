function ImgGrid({ images, start }) {
  return (
    <>
      <div key={`img-${start}`} className="inner-grid">
        {images.map((image, index) => {
          return (
            <>
              <div
                key={`img-${index + start}`}
                className={`img-${index + start}`}
              >
                {index == 2 || index == 3 ? (
                  <>
                    <div className="img-wraper lg-img">
                      <img className="img-fluid w-100 " src={image.src} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="img-wraper sm-img">
                      <img className="img-fluid w-100 " src={image.src} />
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default ImgGrid;
