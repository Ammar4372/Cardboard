import "./App.css";
import { useState, useRef, useEffect } from "react";
import ReactImageMagnify from "@ditus/react-image-magnify";

const ItemImageSlider = (props) => {
  const [img, setImg] = useState(null);
  
  useEffect(() => {
    setImg(()=>props.img ? props.img[0]:null)
  },[props])
  
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < props?.img?.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };

  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <>
     
        <div className="left">
          <div className="left_1">
            {props.img?.map((image, i) => (
              <div
                className={i == 0 ? "img_wrap active" : "img_wrap"}
                key={i}
                onClick={() => hoverHandler(image, i)}
                ref={addRefs}
              >
                <img src={image} alt="sliderImg" />
              </div>
            ))}
          </div>
          <div className=" left_2 px-2 h-100 w-100 ">
            {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "sliderImage",
                  isFluidWidth: true,
                  src: img,
                },
                largeImage: {
                  src: img,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "100%",
                },
              }}
            /> */}
            <img 
              src={img}
              alt="sliderImg"
            />
          </div>
        </div>
        <div className="right"></div>
      
    </>
  );
};
export default ItemImageSlider;
