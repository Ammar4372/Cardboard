import React, { useEffect, useState } from 'react';
import {
    addRollToCart,
    setTotalPrice,
} from "../../Pages/ShoppingCart/CartSlice";
import { useDispatch } from 'react-redux';

const MainDP = ({ Product }) => {
    const [quantity, setQuantity] = useState(500);
    const [size, setSize] = useState({});
    const [pricePerPiece, setPricePerPiece] = useState(0);
    const [price, setPrice] = useState(0);
    const [rollType, setRollType] = useState("thick");
    const [roll, setRoll] = useState([]);
    const dispatch = useDispatch()

    const handleQuantityCounter = (actionType) => {
        if (actionType === 'inc') {
            if (quantity >= 500) {
                setQuantity((prev) => prev + 500);
            } else {
                setQuantity(500);
            }
        } else {
            if (quantity > 500) {
                setQuantity((prev) => prev - 500);
            } else {
                setQuantity(500);
            }
        }
    };

    const handleClick = () => {
        if (price) {
            window.scroll(0, 0)
            const item = {
                id: Product._id,
                name: Product.Type,
                img: Product.images[0],
                size: size,
                type: rollType,
                quantity: quantity,
                pricePerPiece: pricePerPiece,
                price: price,
            };
            dispatch(addRollToCart(item));
            dispatch(setTotalPrice());
        }
    };

    useEffect(() => {
        if (Product?.Sizes) {
            setSize(Product?.Sizes?.thick[0])
        }
    }, [Product])

    useEffect(() => {
        setSize({})
        const pricePP = Product?.Rate * size?.Size;
        setPricePerPiece(pricePP);
        if (pricePerPiece) {
            setPrice(pricePerPiece * quantity);
        }
    }, [size, quantity])


    useEffect(() => {
        if (Product.Sizes) {
            const prod = Product?.Sizes[rollType];
            setRoll(prod)
        }
    }, [Product, rollType])

    return (
        <>
            <div>
                <div className='d-flex justify-content-between align-items-center flex-row'>
                    <span>
                        <h2 className="text-capitalize fw-bold">{Product?.Type}</h2>
                    </span>
                </div>
                <p className="mt-2 fw-normal">{Product?.description}</p>
                <hr className="bg-secondary border-1 border-top border-secondary" />

                <ul>
                    <li className='d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className='fw-semibold text-dark'>Type</span>
                        <div className='d-flex justify-content-between align-items-center flex-row gap-4'>
                            <div className="form-check d-flex justify-content-end align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="thick"
                                    onClick={() => setRollType("thick")}
                                    defaultChecked
                                />
                                <label className="form-check-label fw-normal" htmlFor="thick">
                                    Thick
                                </label>
                            </div>
                            <div className="form-check d-flex justify-content-end align-items-center gap-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="thin"
                                    onClick={() => setRollType("thin")}
                                />
                                <label className="form-check-label fw-normal" htmlFor="thin">
                                    Thin
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className='d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className='fw-semibold text-dark'>Sizes</span>
                        <select
                            className="form-select w-25"
                            aria-label="Default select example"
                            onChange={(e) => {
                                setSize(() => JSON.parse(e.target.value));
                            }}
                        >
                            {roll.map((size) => (
                                <option key={size?.Size} value={JSON.stringify(size)}>{size?.Size}</option>
                            ))}
                        </select>
                    </li>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
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
                    </li>
                    <li className='d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className='fw-semibold text-dark'>Total Price</span>
                        <span>Rs. {price}</span>
                    </li>
                    <li className='d-flex justify-content-between align-items-center flex-column mt-4 w-100'>
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
    );
};

export default MainDP;
