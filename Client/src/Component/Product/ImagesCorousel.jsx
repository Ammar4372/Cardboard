import { useState } from 'react';
import Carousel from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImagesCorousel = ({ images, showThumbs, autoPlay, ...otherProps }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <Carousel
      showThumbs={showThumbs}
      autoPlay={autoPlay}
      infiniteLoop={true}
      selectedItem={selectedImageIndex}
      onSelect={setSelectedImageIndex}
      {...otherProps}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt="slider-img" />
          {showThumbs && (
            <img
              key={`${index}-thumb`}
              src={image.src}
              alt="slider-thumb"
              onClick={() => handleThumbnailClick(index)}
              className="product-slider-thumb" // Optional for styling
            />
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default ImagesCorousel;
