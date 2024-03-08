import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRolls, getRollById, selectRollById } from "./RollsSlice";
import Banner from "../../Component/RollConfig/Banner";
import SingleReelCard from "../ReelsPage/SingleReelCard";

const RolesList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectRolls);
    const productList = useSelector(selectRollById)
    const mainDivRef = useRef();
    const headDivRef = useRef();
    const { id } = useParams();

    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        mainDivRef.current.scrollIntoView();
        dispatch(getRollById(id))
    }, []);

    const handleNextClick = () => {
        headDivRef.current.scrollIntoView();
        setStartIndex(prevIndex => Math.min(productList.Sizes.length - 9, prevIndex + 9));
    };

    const handlePrevClick = () => {
        headDivRef.current.scrollIntoView();
        setStartIndex(prevIndex => Math.max(0, prevIndex - 9));
    };

    const noPages = Math.ceil((productList?.Sizes?.length) / 9);

    const handlePageClick = (index) => {
        headDivRef.current.scrollIntoView();
        setStartIndex(index * 9);
    }

    return (
        <>
            <div ref={mainDivRef}>
                <Banner products={products} />
            </div>
            <div className=" w-100 d-flex flex-column align-items-center ">
                <div ref={headDivRef}>
                    <h1 className=" heading">Items Available</h1>
                </div>
                <div className=" mb-4 container ">
                    <div className=" row justify-content-start ">
                        {productList?.Sizes?.slice(startIndex, startIndex + 9).map((product) => (
                            <SingleReelCard
                                key={product._id}
                                prodId={product._id}
                                prodTitle={productList.Type}
                                prodSize={product.Size}
                                img={"/img/reels_header_image.png"}
                            />
                        ))}
                    </div>
                </div>
                <nav aria-label="Page navigation example" className=" mb-4 ">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={handlePrevClick}
                                style={{ color: "#f7744f" }}
                            >
                                Previous
                            </button>
                        </li>
                        {
                            Array.from({ length: noPages }, (_, index) => (
                                <li className="page-item" key={index} onClick={() => handlePageClick(index)}>
                                    <button
                                        className="page-link"
                                        style={{ color: "#f7744f" }}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))
                        }
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={handleNextClick}
                                style={{ color: "#f7744f" }}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
export default RolesList;
