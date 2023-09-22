import DetailViewer from "../detailViewers/DetailViewer";
import ImgContent from "./ImgContent";


const OurPeople = () => {
  const p =
    "At Cardboard Package, we are committed to providing the best customer service and support to help you find the perfect packaging solution for your needs. With our expertise and extensive range of products, we strive to make the packaging process as easy and seamless as possible.";
  return (
    <>
      <div className="our-people">
        <DetailViewer
          heading={"Our Peoples"}
          secDisc={p}
          content={<ImgContent />}
        />
      </div>
    </>
  );
};

export default OurPeople;
