// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import './App.css'
import PaymentBanner from './Component/PaymentBanner';
import Footer from './Component/Footer';

function App() {

  return (
    <>
    <Header/>
    <PaymentBanner/>
    <Footer/>
    </>
  )
}

export default App
