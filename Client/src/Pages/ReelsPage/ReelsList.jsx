import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectReels, getReelById, selectReelById } from "./ReelsSlice";
import Banner from "../../Component/ReelConfig/Banner";
import SingleReelCard from "./SingleReelCard";

const ReelsList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectReels);
    const productList = useSelector(selectReelById)
    const mainDivRef = useRef();
    const { id } = useParams();

    console.log(productList)
    useEffect(() => {
        mainDivRef.current.scrollIntoView();
        dispatch(getReelById(id));
    }, []);

    // const productList = [
    //     {
    //         _id: 1,
    //         title: 'Reel 1',
    //         size: 17,
    //         weight: 120,
    //         images: ["/img/reels_header_image.png"]
    //     },
    //     {
    //         _id: 2,
    //         title: 'Reel 2',
    //         size: 18,
    //         weight: 130,
    //         images: ["/img/reels_header_image.png"]
    //     },
    //     {
    //         _id: 3,
    //         title: 'Reel 3',
    //         size: 19,
    //         weight: 150,
    //         images: ["/img/reels_header_image.png"]
    //     },
    //     {
    //         _id: 4,
    //         title: 'Reel 4',
    //         size: 20,
    //         weight: 160,
    //         images: ["/img/reels_header_image.png"]
    //     },
    //     {
    //         _id: 5,
    //         title: 'Reel 5',
    //         size: 21,
    //         weight: 170,
    //         images: ["/img/reels_header_image.png"]
    //     }
    // ]
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
                        {productList?.Sizes?.map((product) => (
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
            </div>
        </>
    );
};

export default ReelsList;
