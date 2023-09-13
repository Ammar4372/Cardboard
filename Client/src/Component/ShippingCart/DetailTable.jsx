import { useState } from "react";
import { FiX } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
const DetailTable = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const order = [
    {
      id: "1",
      img: "/img/table-img (1).png",
      color: "Brown",
      price: 12,
      quantity: 1,
      product: "L2 Roll",
    },
    {
      id: "2",
      img: "img/table-img (2).png",
      color: "Grey",
      price: 25,
      quantity: 1,
      product: "Pizza Box",
    },
  ];
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            {order.map((data, index) => {
              return (
                <>
                  <tr key={{ index }}>
                    <td>
                      <a className="">
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
                        <button
                          className="quantity__minus"
                          onClick={handleDecrement}
                        >
                          <span>-</span>
                        </button>

                        <div className="quantity__input">{counter}</div>

                        <button
                          className="quantity__plus"
                          onClick={handleIncrement}
                        >
                          <span>+</span>
                        </button>
                      </div>
                    </td>
                    <td>${data.price}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default DetailTable;
