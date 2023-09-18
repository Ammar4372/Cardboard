import { useDispatch } from "react-redux";
import { setDimension } from "../../Pages/CardBoardPage/CardBoardSlice";
const StandardSize = ({ item }) => {
  const dispatch = useDispatch();

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
              aria-label="Default select example"
              onChange={(e) => {
                dispatch(setDimension(e.target.value));
              }}
            >
              <option defaultValue={""} hidden>
                Select A Option
              </option>

              <option
                value={JSON.stringify({
                  length: item.length,
                  width: item.width,
                  depth: item.depth,
                })}
              >
                {item.length
                  ? `${item.length}’’ x${item.width}’’x${item.depth}’’`
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
