import { Link } from "react-router-dom"

const SingleItemCard = (props) => {
    return (
        <div className=" col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
            <div className="d-flex justify-content-center container mt-5">
                <div className="card p-3 bg-white">
                    <i className=" bg-success rounded text-white" style={{ "padding": "0.3rem", "width": "max-content" }} >In-Stock</i>
                    <div className="about-product text-center mt-2">
                        <img src={props.img} width="150" />
                        <div>
                            <h4 className=" text-capitalize ">{props.prodTitle}</h4>
                            <h6 className="mt-0 text-black-50 fs-6">
                                {props.prodDim.width} X {props.prodDim.length} X {props.prodDim.depth}
                            </h6>
                        </div>
                    </div>
                    <div className="stats mt-2">
                        <div className="d-flex justify-content-between">
                            <span className=" fw-bold ">Min Pieces</span>
                            <span className=" fw-bold text-black-50 ">{props.minOrder}</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 ">
                            <span className=" fw-bold ">Price Per Piece</span>
                            <span className=" fw-bold text-black-50 ">Rs. 27</span>
                        </div>
                    </div>
                    <div className="d-grid gap-2">
                        <Link
                            to={`/ProductDisplay/${props.prodId}`}
                            className="btn btn-primary mt-4 fw-bold" type="button"
                            style={{ background: "#f7744f", borderColor: "#f7744f" }}
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleItemCard