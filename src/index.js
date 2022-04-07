// import React from "react";
import { createRoot } from 'react-dom/client';
// import App from "./components/App";
import "./styles/main.scss";
import AppRouter from './routers/AppRouter';


const container = document.getElementById('app');
const root = createRoot(container);



root.render(<AppRouter/>);

