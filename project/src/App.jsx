import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import IndexPage from "./Pages/IndexPage";
import Root from "./Component/Root";
import CardBoardPage from "./Pages/CardBoardPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<IndexPage />} />
      <Route path="/CardBoard" element={<CardBoardPage/>}/>
       {/* <Route index element={<CardBoardPage />} /> */}
    </Route>
  )
);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
