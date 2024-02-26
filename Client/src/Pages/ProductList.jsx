import { useEffect, useRef, useState } from "react"
import SingleItemCard from "../Component/Card/SingleItemCard"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMaterials, selectMaterials } from "./CardBoardPage/CardBoardSlice";
import CustomOrderMain from "../Component/CustomOrder/CustomOrderMain";

const ProductList = () => {
  const materials = useSelector(selectMaterials);
  const dispatch = useDispatch();

  const mainDivRef = useRef();
  const [productList, setProductList] = useState([]);
  const { id } = useParams();

  const getProductList = () => {
    fetch(`http://localhost:3001/products-list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data)
      })
  }

  useEffect(() => {
    getProductList()
    dispatch(getMaterials());
    mainDivRef.current.scrollIntoView()
  }, [])

  return (
    <>
      <div ref={mainDivRef}>
        <CustomOrderMain products={productList} materials={materials} />
      </div>
      <div className=" w-100 d-flex flex-column align-items-center ">
        <div>
          <h1 className=' heading'>Items Available</h1>
        </div>
        <div className=" mb-4 container ">
          <div className=" row justify-content-start ">
            {
              productList?.map((product) => (
                <SingleItemCard
                  key={product._id}
                  prodId={product._id}
                  prodTitle={product.cardboardname}
                  prodDim={product.dimensions}
                  minOrder={product.minOrder}
                  img={product.images[0]}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList