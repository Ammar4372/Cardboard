import DetailViewer from "../detailViewers/DetailViewer";
import ImgCard from "./ImgCard";

const OurProducts = () => {
    const p = 'Our selection includes different sizes of rolls and reels, as well as custom and stock sizes of cardboard boxes, ensuring that you can find the right packaging solution for your business.';
  return (
    <>
       <DetailViewer heading={'Our Products'} secDisc={p} content={<ImgCard />} /> 
    </>
  )
}

export default OurProducts