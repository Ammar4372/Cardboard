import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMaterials,
  getProductById,
  selectProduct,
} from "../../Pages/CardBoardPage/CardBoardSlice";
import { useEffect } from "react";
import MainDisplay from "./MainDisplay";
import { selectReelById } from "../ReelsPage/ReelsSlice";

const SinglePage = () => {
  const id = useParams().id;
  const Reel = useSelector(selectReelById);
  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  const product = Reel?.Sizes?.filter((item) => item._id === id);
  return (
    <>
      <MainDisplay Product={product[0]} />
    </>
  );
};
export default SinglePage;
