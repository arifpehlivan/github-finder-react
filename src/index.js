import React from "react";
import { createRoot } from 'react-dom/client';
// import App from "./components/App";
import "./styles/main.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const container = document.getElementById('app');
const root = createRoot(container);

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
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes> 
    </BrowserRouter>
)

root.render(routes);

