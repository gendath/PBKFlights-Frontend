import React from "react";
import {render} from "react-dom"
import App from "./components/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/main.css"
import Router from "./components/Router"




render(<Router />, document.querySelector("#main"))