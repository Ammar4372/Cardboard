import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import IndexPage from "./Pages/IndexPage";
import Root from "./Component/Root";
import CardBoardPage from "./Pages/CardBoardPage";
import ShoppingCart from "./Pages/ShopingCart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReelsPage from "./Pages/ReelsPage";
import RollsPage from "./Pages/RollsPage";
import ProductDisplay from "./Pages/ProductDisplay";
import RequestQute from "./Pages/RequestQute"
import CheckoutPage from "./Pages/Checkout";
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<IndexPage />} />
      <Route path="/CardBoard" element={<CardBoardPage />} />
      <Route path="/Cart" element={<ShoppingCart />} />
      <Route path="/Reel" element={<ReelsPage />} />
      <Route path="/Roll" element={<RollsPage/>} />
      <Route path="/ProductDisplay" element={<ProductDisplay/>}/>
      <Route path="/RequestQute" element={<RequestQute/>}/>
      <Route path="/Checkout" element={<CheckoutPage/>}/>
    </Route>
  )
);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
