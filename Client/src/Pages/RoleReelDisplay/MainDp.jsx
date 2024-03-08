import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectReelById } from '../ReelsPage/ReelsSlice';

const MainDp = ({ Product }) => {
    const [quantity, setQuantity] = useState(500);
    const [price, setPrice] = useState(0);
    const Reel = useSelector(selectReelById)
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
                        <h2 className="text-capitalize fw-bold ">{Reel?.Type}</h2>
                    </span>
                    
                </div>
                <p className="mt-2 fw-normal" >{Reel?.description}</p>
                <hr className=" bg-secondary border-1 border-top border-secondary " />

                <ul>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Vendors</span>
                        <select className="form-select w-25 " aria-label="Default select example">
                            
                        </select>
                    </li>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Size</span>
                        <span>{Product?.Size} '</span>
                    </li>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Weights</span>
                        <select className="form-select w-25 " aria-label="Default select example">
                            
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