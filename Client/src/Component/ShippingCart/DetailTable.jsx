
import { FiX } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { incrementItemQuantity,decrementItemQuantity,removeItem } from "../../Pages/ShoppingCart/CartSlice";
const DetailTable = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <>
      <tr >
        <td>
          <a className="" onClick={()=>dispatch(removeItem(data.id))}>
            <FiX />
          </a>
          <a className="like">
            <AiFillHeart />
          </a>
        </td>
        <td>
          <div className="img-wraper">
            <img className="img-fluid" src={data.img} />
          </div>
        </td>
        <td>
          <h6>{data.product}</h6>
          <p>{data.color}</p>
        </td>
        <td>
          <div className="quantity">
            <button className="quantity__minus" 
            onClick={()=>dispatch(decrementItemQuantity(data.id))}>
              <span>-</span>
            </button>

            <div className="quantity__input">{data.quantity}</div>

            <button className="quantity__plus" onClick={()=>dispatch(incrementItemQuantity(data.id))}>
              <span>+</span>
            </button>
          </div>
        </td>
        <td>${data.price}</td>
      </tr>
    </>
  );
};
export default DetailTable;
