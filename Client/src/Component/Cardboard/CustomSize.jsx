import { useSelector, useDispatch } from "react-redux";
import {
  selectConfig,
  setDepth,
  setLength,
  setWidth,
} from "../../Pages/CardBoardPage/CardBoardSlice";
const CustomeSize = () => {
  const config = useSelector(selectConfig);
  const dispatch = useDispatch();

  // if(length <= 0 && width <= 0 && depth <=0 ) {
  //     Swal.fire({
  //         title: " L W D Fields are Improper?",
  //         text: "Provide proper Data!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //       });
  // }
  // };
  return (
    <>
      {/* Length */}
      <div className="row">
        <div className="col-lg-4">
          <h6>Length:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group" style={{ border: "none" }}>
            <input
              className="form-control"
              type="text"
              id="integerInput"
              placeholder="0"
              value={config.dimension.length}
              onChange={(e) => dispatch(setLength(e.target.value))}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid black",
              }}
            />
          </div>
        </div>
      </div>

      {/* Width */}
      <div className="row">
        <div className="col-lg-4">
          <h6>Width:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group" style={{ border: "none" }}>
            <input
              className="form-control"
              type="text"
              id="integerInput"
              placeholder="0"
              value={config.dimension.width}
              onChange={(e) => dispatch(setWidth(e.target.value))}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid black",
              }}
            />
          </div>
        </div>
      </div>

      {/* Depth */}
      <div className="row">
        <div className="col-lg-4">
          <h6>Depth:</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group" style={{ border: "none" }}>
            <input
              className="form-control"
              type="text"
              id="integerInput"
              placeholder="0"
              value={config.dimension.depth}
              onChange={(e) => dispatch(setDepth(e.target.value))}
              style={{
                width: "98%",
                border: "none",
                borderBottom: "1px solid black",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomeSize;
