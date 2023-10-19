import Container3DBox from "../Component/Container3DBox";
import { useDispatch, useSelector } from "react-redux";
import {
  getMaterials,
  getProducts,
  selectMaterials,
  selectProducts,
} from "./CardBoardPage/CardBoardSlice";
import { useEffect } from "react";

const BoxModel = () => {
  const products = useSelector(selectProducts);
  const materials = useSelector(selectMaterials);

  const dispatch = useDispatch();
  console.log(materials);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getMaterials());
  }, []);
  return (
    <div className=" h-100 py-3 container3dbox">
      <Container3DBox products={products} materials={materials} />
    </div>
  );
};

export default BoxModel;
