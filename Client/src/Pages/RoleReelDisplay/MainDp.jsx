import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReelById, getReelById, setImages, selectImages } from '../ReelsPage/ReelsSlice';
import {
    addReelToCart,
    setTotalPrice,
} from "../../Pages/ShoppingCart/CartSlice";
import { useParams } from 'react-router';

const MainDp = () => {
    const id = useParams().id;
    const Product = useSelector(selectReelById);
    const [quantity, setQuantity] = useState(500);
    const [size, setSize] = useState({});
    const [selectedWeights, setSelectedWeight] = useState(null);
    const [singleWeight, setSingleWeight] = useState(null);
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const weightRef = useRef();

    const imgArr = useSelector(selectImages)

    useEffect(() => {
        window.scroll(0, 0);
        dispatch(getReelById(id))
    }, [id]);

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
                id: Product?._id,
                name: Product?.Type,
                img: imgArr[0],
                size: Product?.Size,
                weight: singleWeight,
                quantity: 1,
                pricePerPiece: price,
                price: price,
            };
            dispatch(addReelToCart(item));
            dispatch(setTotalPrice());
        }
    };

    const handlePrice = (e) => {
        const weight = JSON.parse(e.target.value);
        if (weight.weight_type) {
            setSingleWeight(weight);
        }
    };

    useEffect(() => {
        if (Product && Product.Sizes && Product.Sizes.length > 0) {
            setSize(Product.Sizes[0]);
            setSelectedWeight(Product.Sizes[0].Weight);
            setSingleWeight(Product.Sizes[0].Weight[0]);
        }
    }, [Product]);

    useEffect(() => {
        const pricePerPiece = singleWeight?.weight_type * singleWeight?.Rate;
        setPrice(pricePerPiece);
        if (singleWeight && singleWeight?.images) {
            dispatch(setImages(singleWeight.images))
        }
    }, [Product, singleWeight])


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
                        <span className='fw-semibold text-dark'>Sizes</span>
                        <select
                            className="form-select w-25"
                            aria-label="Default select example"
                            onChange={(e) => {
                                setSize(() => JSON.parse(e.target.value));
                                // weightRef.current.value = ''; // Reset second select input
                            }}
                        >
                            {Product?.Sizes?.map((size) => (
                                <option key={size?._id} value={JSON.stringify(size)}>{size?.Size}</option>
                            ))}
                        </select>
                    </li>
                    <li className='d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className='fw-semibold text-dark'>Weights</span>
                        <select
                            ref={weightRef}
                            className="form-select w-25"
                            aria-label="Default select example"
                            onChange={(e) => handlePrice(e)}
                        >
                            {selectedWeights?.map((weight) => (
                                <option key={weight._id} value={JSON.stringify(weight)}>{weight.weight_type}</option>
                            ))}
                        </select>
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

export default MainDp;
