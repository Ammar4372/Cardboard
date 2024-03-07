import { Link } from "react-router-dom"

const SingleReelCard = (props) => {
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
                                 
                            </h6>
                        </div>
                    </div>
                    <div className="stats mt-2">
                        <div className="d-flex justify-content-between">
                            <span className=" fw-bold ">Size</span>
                            <span className=" fw-bold text-black-50 ">{props.prodSize}</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2 ">
                            <span className=" fw-bold ">Weight</span>
                            <span className=" fw-bold text-black-50 ">{props.prodWeight}Kg</span>
                        </div>
                    </div>
                    <div className="d-grid gap-2">
                        <Link
                            to={`/display-pannal/${props.prodId}`}
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

export default SingleReelCard