import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import "./stylesheets/index.scss";
import Landing from "./components/Landing";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <HashRouter>
        <Landing />
    </HashRouter>,
     document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// IMPORTANTE!  tendremos que cambiar cualquier recurso http a https
