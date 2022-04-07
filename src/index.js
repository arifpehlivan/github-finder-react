import React from "react";
import { createRoot } from 'react-dom/client';
// import App from "./components/App";
import "./styles/main.scss"
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

const container = document.getElementById('app');
const root = createRoot(container);

const Nav = () =>{
    return(
        <nav>
            <NavLink exact="true" to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            <NavLink to="/products" activeclassname="active">Products</NavLink>
        </nav>

    // <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/contact">Contact</Link>
    //     <Link to="/products">Products</Link>
    // </nav>

    
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

const NotFound = () => {
    return (
        <div>
            404 Not Found
        </div>
    )   
}

const routes=(
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes> 
    </BrowserRouter>
)

root.render(routes);

