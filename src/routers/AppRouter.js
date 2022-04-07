import React from "react";
import { BrowserRouter, Route, Routes, NavLink, useParams } from "react-router-dom";

const Nav = () =>{
    return(
        <nav>
            <NavLink exact="true" to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            <NavLink exact="true" to="/products" activeclassname="active">Products</NavLink>
            <NavLink exact="true" to="/product/12" activeclassname="active">Products Details</NavLink>
        </nav>
    )
}

const HomePage = () => {
    return (
        <div>
            Home Page
        </div>
    )   
}

const ContactPage = () => {
    return (
        <div>
            Contact Page
        </div>
    )   
}

const ProductsPage = () => {
    return (
        <div>
            Products Page
        </div>
    )   
}
const ProductDetailspage = () => {
    // console.log(props.match.params);
    const {id} = useParams();
    return (
        <>
            <div>
                Products Detail Page
            </div>
            <div>id: {id}</div>
        </>
    )   
}

const NotFound = () => {
    return (
            <div>
                404 Not Found
            </div>
    )   
}

const AppRouter=()=>(
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/product/:id" element={<ProductDetailspage />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes> 
    </BrowserRouter>
)

export default AppRouter;