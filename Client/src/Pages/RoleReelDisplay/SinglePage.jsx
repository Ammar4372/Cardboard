import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMaterials,
  getProductById,
  selectProduct,
} from "../../Pages/CardBoardPage/CardBoardSlice";
import { useEffect } from "react";
import MainDisplay from "./MainDisplay";

const SinglePage = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
//   const product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getMaterials());
    window.scroll(0, 0);
  }, []);

  const product = {
    _id: 1,
    title: 'Reel 1',
    desc: 'Here description of product must display, and you have to do this.',
    size: 17,
    weights: [100, 120, 130, 140, 150],
    vendors: ["Ali", "Haider", "Aqib", "Kashif", "Salman"],
    images:['/img/reels_product_1.png','/img/reels_product_2.png', '/img/reels_product_3.png']
  }
  
  return (
    <>
      <MainDisplay Product={product} />
    </>
  );
};
export default SinglePage;
