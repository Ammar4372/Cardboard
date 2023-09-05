import Merge from '../Component/Cardboard/Merge'
import Footer from "../Component/Footer";
import PaymentBanner from "../Component/PaymentBanner";
import Nav from "../Component/Navbar/Nav";
import Card from '../Component/Card/Card'
import CardBoardInspirations from '../Component/CardBoardInspirations/CardBoardInspiration'
function CardBoardPage() {
    return (
        <>
        <Nav/>
        <Merge/>
        <Card/>
        <CardBoardInspirations/>
        <PaymentBanner/>
        <Footer/>
        </>
    )
}
export default CardBoardPage;