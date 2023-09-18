import UserDetail from "../Component/Product/UserDetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  getProductById, selectProduct } from "./CardBoardPage/CardBoardSlice";
import { useEffect } from "react";

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const Product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProductById(id));
    window.scroll(0,0);
  }, []);
  return (
    <>
      <UserDetail Product={Product} />
    </>
  );
};
export default ProductDisplay;
