import { configureStore } from "@reduxjs/toolkit";
import CardBoardSlice from "./Pages/CardBoardPage/CardBoardSlice";
import CartSlice from "./Pages/ShoppingCart/CartSlice";
import CheckoutSlice from "./Pages/Checkout/CheckoutSlice";

import materialSlice from './Store/slices/materialSlice';
import quantitySlice from './Store/slices/quantitySlice'
import sizeSlice from './Store/slices/sizeSlice';
import boxStateSlice from './Store/slices/boxStateSlice';
import sideSelectorSlice from './Store/slices/sideSelectorSlice';
import imgGetterSlice from './Store/slices/imgGetterSlice';
import imagesContainerSlice from './Store/slices/imagesContainerSlice';
import sideColor from './Store/slices/sideColor';
import designSelection from './Store/slices/designSelection';
import selectText from './Store/slices/selectText';
import objectType from './Store/slices/objectType';
import canvasImage from './Store/slices/canvasImage';
import deleteCanvasObj from './Store/slices/deleteCanvasObj'; 
import applyDesign from './Store/slices/applyDesign';
import imageState from './Store/slices/imageState';
import sideMenuSelection from "./Store/slices/sideMenuSelection";

const store = configureStore({
  reducer: {
    CardBoardSlice,
    CartSlice,
    CheckoutSlice, 

// 3d cardboard slices
    materialChanged: materialSlice,
    quantityChanged: quantitySlice,
    sizeChanged: sizeSlice,
    stateChanged: boxStateSlice,
    sideChanged: sideSelectorSlice,
    imageGot: imgGetterSlice,
    imagesConainer: imagesContainerSlice,
    sideColorChanged: sideColor,
    designSelected: designSelection,
    selectedText: selectText,
    selectedObjType: objectType,
    selectedCanvasImage: canvasImage,
    deletedCanvasObj: deleteCanvasObj,
    appliedDesign: applyDesign,
    imageStated: imageState,
    sideMenuSelectedItem: sideMenuSelection

  },
});

export default store;
