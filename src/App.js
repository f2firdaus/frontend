import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Category from './components/Category/Category'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Newsletter  from "./components/Footer/Newsletter/Newsletter";
import  Footer  from "./components/Footer/Footer";
import AppContext, { Context } from "./utils/context";
import CartSuccess from "./components/Cart/CartItem/CartSuccess";
import { useRef } from "react";
function App() {
    const refer = useRef();
    const about = useRef();
    
    const handleCat = () => {
        refer?.current.scrollIntoView({behavior:"smooth"});
    };
    const handleAbout = () => {
        about.current.scrollIntoView({behavior:"smooth"})
    }
    return (
        <>
            <BrowserRouter>
                <AppContext>
                    <Header handleCat={handleCat} handleAbout={handleAbout}  />
                <Routes>
                    <Route path="/" element={<Home refer={refer} />} />
                    <Route path="category/:id" element={<Category />} />
                        <Route path="product/:id" element={<SingleProduct />} />
                        <Route path="/success" element={ <CartSuccess />} />  
                </Routes>
                    <Newsletter />
                    
                    <Footer about={about} />
                    </AppContext>
            </BrowserRouter>
        </>
    
    )
}

export default App;
