import UserDetail from "../Component/Product/UserDetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMaterials,
  getProductById,
  selectMaterials,
  selectProduct,
} from "./CardBoardPage/CardBoardSlice";
import { useEffect } from "react";

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const product = useSelector(selectProduct);
  const materials = useSelector(selectMaterials);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getMaterials());
    window.scroll(0, 0);
  }, []);
  
  return (
    <>
      <UserDetail Product={product} materials={materials} />
    </>
  );
};
export default ProductDisplay;
