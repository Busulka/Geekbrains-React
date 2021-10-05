import React from "react";
import {Header} from "./components/Header";
import {Layout} from "./components/Layout";
import {Routes} from "./Routes/Routes";
import {BrowserRouter} from "react-router-dom";
import './App.css';


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Layout>
                    <Routes />
                </Layout>
            </div>
        </BrowserRouter>
    );
}

export default App;
