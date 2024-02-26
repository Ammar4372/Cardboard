import DetailTable from "./DetailTable";
import { selectCartItems } from "../../Pages/ShoppingCart/CartSlice";
import { useSelector } from "react-redux";

const ItemsTable = () => {
  const Cart = useSelector(selectCartItems);
  return (
    <>
      <div className=" p-2">
        <h5 className=" text-capitalize fw-bold">Items in Cart</h5>
        <p className=" text-black-50">
          All your items are viewable in the list. You can remove them or
          duplicate them
        </p>
      </div>

      <div className=" w-100 d-flex justify-content-between align-items-center flex-row" style={{ borderRadius: 10 }}>
        <table className="w-100">
          <tbody className=" w-100 d-flex justify-content-between align-items-center flex-column bg-white rounded">
            {Cart.map((data, index) => (
              <DetailTable data={data} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemsTable;
