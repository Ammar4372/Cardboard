import MainDisplay from "./MainDisplay";
import { useDispatch, useSelector } from 'react-redux';
import { getRollById, selectRollById } from "../RollsPage/RollsSlice"
import { useParams } from 'react-router';
import { useEffect } from "react";

const RollSinglePage = () => {

  const id = useParams().id;
  const product = useSelector(selectRollById);
  const dispatch = useDispatch();

    useEffect(() => {
        window.scroll(0, 0);
        dispatch(getRollById(id))
    }, [id]);

  return (
    <>
      <MainDisplay Product={product} />
    </>
  );
};
export default RollSinglePage;
