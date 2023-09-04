import DetailViewer from "../detailViewers/DetailViewer"
import BoxImgContent from "./BoxImgContent";

import './boxInspirations.css';

const BoxInspirations = () => {
    const p = 'Our mission is to provide packaging solutions that cater to businesses of all types. Whether you require custom retail packaging with your logo or corrugated cardboard mailers for your ecommerce business, we offer plenty of inspiration to help you create unique and personalized product packaging that fits your needs.';
  return (
    <>
        <div className="box-inspirations">
            <DetailViewer heading={'Box Inspirations'} secDisc={p} content={<BoxImgContent />} />
        </div>
    </>
  )
}

export default BoxInspirations