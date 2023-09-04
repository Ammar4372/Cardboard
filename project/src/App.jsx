import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import './App.css'
import PaymentBanner from './Component/PaymentBanner';
import Footer from './Component/Footer';
import OurProducts from './Component/Our-Products/OurProducts';
import OurPeople from './Component/Our-People/OurPeople'
import BoxInspiration from './Component/BoxInspirations/BoxInspirations'
import Nav from './Component/Navbar/Nav';
function App() {

  return (
    <>
    <Nav/>
    <Header/>
    <OurProducts/>
    <OurPeople/>
    <BoxInspiration/>
    <PaymentBanner/>
    <Footer/>
    </>
  )
}

export default App
