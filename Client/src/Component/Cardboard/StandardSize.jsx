import { useDispatch, useSelector } from "react-redux";
import {
  selectConfig,
  setDimension,
} from "../../Pages/CardBoardPage/CardBoardSlice";

const StandardSize = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);
  const config = useSelector(selectConfig);
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-4">
          <h6>Dimension</h6>
        </div>
        <div className="col-lg-8">
          <div className="form-group">
            <select
              className="form-select"
              value={JSON.stringify(config.dimension)}
              onChange={(e) => {
                dispatch(setDimension(e.target.value));
              }}
            >
              <option
                value={JSON.stringify({
                  length: "",
                  width: "",
                  depth: "",
                })}
                hidden
              >
                Select an option
              </option>

              <option
                value={JSON.stringify({
                  length: item.length,
                  width: item.width,
                  depth: item.depth,
                })}
              >
                {item
                  ? `${item.dimensions.length}’’ x${item.dimensions.width}’’x${item.dimensions.depth}’’`
                  : ""}
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default StandardSize;
