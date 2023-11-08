import CanvasContainer from "./CanvasContainer/CanvasContainer"
import ItemCard from "./ItemCard/ItemCard"
import Design from "./MenuDetails/Design"
import Material from "./MenuDetails/Material"
import Quantity from "./MenuDetails/Quantity"
import Size from "./MenuDetails/Size"
import SideMenu from "./SideMenu/SideMenu"

import { useSelector } from 'react-redux';

const Container3DBox = ({ products, materials }) => { 
    const designOption = useSelector((state) => {
        return state.designSelected
    });

    const sideMenuSelection = useSelector((state) => {
        return state.sideMenuSelectedItem
    });


    return (
        <>
            <div className=" manipulator container-fluid ps-0">
                <div className="row">
                    <div className="col-1">
                        <SideMenu />
                    </div>
                    <div className={!designOption ? "col-2 rounded" : "col-4 rounded"} style={{ backgroundColor: "#F3F3F3" }}>
                        {sideMenuSelection === 'size' && <Size products={products} />}
                        {sideMenuSelection === 'design' && <Design />}
                        {sideMenuSelection === 'material' && <Material />}
                        {sideMenuSelection === 'quantity' && <Quantity />}
                    </div>
                    <div className={!designOption ? "col-6" : 'col-4'} >
                        <CanvasContainer />
                    </div>
                    <div className="col-3">
                        <ItemCard products={products} materials={materials} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container3DBox