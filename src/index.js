import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from "./App"

import { BrowserRouter as Router } from 'react-router-dom'
import { StateProvider } from "./context/StateProvider";
import { initialstate } from './context/initialstate'
import reducer from "./context/reducer";


ReactDOM.render(
    <Router>
        <StateProvider initialstate={initialstate} reducer={reducer} >
            <App />
        </StateProvider>

    </Router>,
    document.getElementById('root')
)