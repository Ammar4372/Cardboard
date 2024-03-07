import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRolls } from "./RollsSlice";
import Banner from "../../Component/ReelConfig/Banner";
import SingleReelCard from "../ReelsPage/SingleReelCard";

const RolesList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectRolls);

    const mainDivRef = useRef();
    const { id } = useParams();

    useEffect(() => {
        mainDivRef.current.scrollIntoView();
    }, []);

    const productList = [
        {
            _id: 1,
            title: 'Roll 1',
            size: 17,
            weight: 120,
            images: ["/img/reels_header_image.png"]
        },
        {
            _id: 2,
            title: 'Roll 2',
            size: 18,
            weight: 130,
            images: ["/img/reels_header_image.png"]
        },
        {
            _id: 3,
            title: 'Roll 3',
            size: 19,
            weight: 150,
            images: ["/img/reels_header_image.png"]
        },
        {
            _id: 4,
            title: 'Roll 4',
            size: 20,
            weight: 160,
            images: ["/img/reels_header_image.png"]
        },
        {
            _id: 5,
            title: 'Roll 5',
            size: 21,
            weight: 170,
            images: ["/img/reels_header_image.png"]
        }
    ]
    return (
        <>
            <div ref={mainDivRef}>
                <Banner products={products} />
            </div>
            <div className=" w-100 d-flex flex-column align-items-center ">
                <div>
                    <h1 className=" heading">Items Available</h1>
                </div>
                <div className=" mb-4 container ">
                    <div className=" row justify-content-start ">
                        {productList?.map((product) => (
                            <SingleReelCard
                                key={product._id}
                                prodId={product._id}
                                prodTitle={product.title}
                                prodSize={product.size}
                                prodWeight={product.weight}
                                img={product.images[0]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default RolesList;
