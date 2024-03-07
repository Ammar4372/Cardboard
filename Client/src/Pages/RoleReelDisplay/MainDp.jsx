import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const MainDp = ({ Product }) => {
    const [quantity, setQuantity] = useState(500);
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();

    const handleQuantityCounter = (actionType) => {
        if (actionType === 'inc') {
            if (quantity >= 500) {
                setQuantity((prev) => prev + 500)
            } else {
                setQuantity(500)
            }
        } else {
            if (quantity > 500) {
                setQuantity((prev) => prev - 500)
            } else {
                setQuantity(500)
            }
        }
    }

    const handleClick = () => {
        console.log("Clicked")
    };

    return (
        <>
            <div>
                <div className=' d-flex justify-content-between align-items-center flex-row'>
                    <span>
                        <h2 className="text-capitalize fw-bold ">{Product?.title}</h2>
                    </span>
                    {/* <span className=' d-flex align-items-center flex-row gap-2'>
                        <span className=' fw-normal text-dark'>Vendor</span>
                        <select className="form-select " aria-label="Default select example">
                            <option selected value={Product?.vendors[0]}>{Product?.vendors[0]}</option>
                            <option value={Product?.vendors[1]}>{Product?.vendors[1]}</option>
                            <option value={Product?.vendors[2]}>{Product?.vendors[2]}</option>
                        </select>
                    </span> */}
                </div>
                <p className="mt-2 fw-normal" >{Product?.desc}</p>
                <hr className=" bg-secondary border-1 border-top border-secondary " />

                <ul>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Vendors</span>
                        <select className="form-select w-25 " aria-label="Default select example">
                            <option selected value={Product?.vendors[0]}>{Product?.vendors[0]}</option>
                            <option value={Product?.vendors[1]}>{Product?.vendors[1]}</option>
                            <option value={Product?.vendors[2]}>{Product?.vendors[2]}</option>
                            <option value={Product?.vendors[3]}>{Product?.vendors[3]}</option>
                            <option value={Product?.vendors[4]}>{Product?.vendors[4]}</option>
                        </select>
                    </li>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Size</span>
                        <span>{Product?.size} '</span>
                    </li>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Weights</span>
                        <select className="form-select w-25 " aria-label="Default select example">
                            <option selected value={Product?.weights[0]}>{Product?.weights[0]} KG</option>
                            <option value={Product?.weights[1]}>{Product?.weights[1]} KG</option>
                            <option value={Product?.weights[2]}>{Product?.weights[2]} KG</option>
                        </select>
                    </li>
                    {/* <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Quantity</span>
                        <span className=' d-flex justify-content-end align-items-center flex-row gap-2 '>
                            <button
                                type="button"
                                className=' btn text-white fw-bold '
                                style={{ background: "#f7744f" }}
                                onClick={() => handleQuantityCounter('dec')}
                            >
                                -
                            </button>
                            <input type="text" value={quantity} disabled className=' w-25 py-1 rounded' />
                            <button
                                type="button"
                                className=' btn text-white fw-bold '
                                style={{ background: "#f7744f" }}
                                onClick={() => handleQuantityCounter('inc')}
                            >
                                +
                            </button>
                        </span>
                    </li> */}
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Total Price</span>
                        <span>Rs. {price}</span>
                    </li>
                    <li className=' d-flex justify-content-between align-items-center flex-column mt-4 w-100'>
                        <button
                            type="button"
                            className="btn btn-lg btn-block text-white rounded-5 w-100"
                            style={{ background: "#f7744f" }}
                            onClick={handleClick}
                        >
                            Add to Cart
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainDp