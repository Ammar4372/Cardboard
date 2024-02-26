import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Pages/ShoppingCart/CartSlice';

const ProductDP = ({ Product, materials }) => {
    const [selectedMaterial, setSelectedMaterial] = useState('White');
    const [quantity, setQuantity] = useState(500);
    const [pricePerPiece, setPricePerPiece] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [materialDetails, setMaterialDetails] = useState({})

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

    useEffect(() => {
        if (Product && quantity) {
            const material = materials?.find((mat) => mat.materailName === selectedMaterial);
            setMaterialDetails(material);
            const pricePerSheet =
                (((Product?.dimensions?.length * Product?.dimensions?.width * 210) / 15500) *
                    material?.paperRate) /
                100;
            const pricePerRoll =
                (Product?.dimensions?.width * material?.rollRate) /
                (2400 / Product?.dimensions?.length);
            const pricePerPiece = Number.parseFloat(
                (pricePerSheet + pricePerRoll + 14 + 5 + 2).toFixed(0)
            );

            setPricePerPiece(pricePerPiece);

            const price = pricePerPiece * quantity;
            setTotalPrice(price)
        }
    }, [selectedMaterial, quantity]);

    const handleClick = () => {
        if (totalPrice) {
            const item = {
                id: Product?._id,
                ThreeD: false,
                name: Product?.cardboardname,
                img: Product?.images[0],
                quantity: quantity,
                pricePerPiece: pricePerPiece,
                price: totalPrice,
                dimension: Product.dimension,
                printedSides: 4,
                material: materialDetails?.materailName,
                thickness: 3,
            };
            dispatch(addToCart(item));
        } else {
            alert("Please Select All Required Fields");
        }
    };

    return (
        <>
            <div>
                <h2 className="text-capitalize fw-bold ">{Product?.cardboardname}</h2>
                <p className="mt-2 fw-normal" >{Product?.description}</p>
                <hr className=" bg-secondary border-1 border-top border-secondary " />

                <ul>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Dimensions</span>
                        <span>{Product?.dimensions?.width}' X {Product?.dimensions?.length}' X {Product?.dimensions?.depth}'</span>
                    </li>
                    <li className=' d-flex justify-content-between align-items-start flex-column mb-2'>
                        <span className=' fw-semibold text-dark'>Material</span>
                        <div className=' d-flex justify-content-between align-items-center flex-row gap-4 p-2'>
                            <span
                                role='button'
                                className={` d-flex justify-content-start align-items-center flex-column p-1 ${selectedMaterial === 'White' ? "border border-secondary" : ''}`}
                                onClick={() => setSelectedMaterial('White')}
                            >
                                <img src="/whiteCoatTexture.jpg" alt="white-material" height={'50px'} width={'50px'} />
                                <span>White</span>
                            </span>
                            <span
                                role='button'
                                className={` d-flex justify-content-start align-items-center flex-column p-1 ${selectedMaterial === 'Kraft' ? "border border-secondary" : ''}`}
                                onClick={() => setSelectedMaterial('Kraft')}
                            >
                                <img src="/kraftTexture.jpg" alt="white-material" height={'50px'} width={'50px'} />
                                <span>Kraft</span>
                            </span>
                            <span
                                role='button'
                                className={` d-flex justify-content-start align-items-center flex-column p-1 ${selectedMaterial === 'Dreamcoat' ? "border border-secondary" : ''}`}
                                onClick={() => setSelectedMaterial('Dreamcoat')}
                            >
                                <img src="/dreamCoatTexture.jpg" alt="white-material" height={'50px'} width={'50px'} />
                                <span>Dreamcoat</span>
                            </span>
                        </div>
                    </li>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Thickness</span>
                        <select className="form-select w-25 " aria-label="Default select example">
                            <option selected value="3">3 Ply</option>
                            <option value="5">5 Ply</option>
                            <option value="7">7 Ply</option>
                        </select>
                    </li>
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Price Per Piece</span>
                        <span>Rs. {pricePerPiece}</span>
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
                    <li className=' d-flex justify-content-between align-items-center flex-row mb-2'>
                        <span className=' fw-semibold text-dark'>Total Price</span>
                        <span>Rs. {totalPrice}</span>
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

export default ProductDP