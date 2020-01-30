import React from 'react';
import './App.css';
import App__header from "./components/header/App__header";
import App__menu from "./components/header/menu/App__menu";
import App__infoImg from "./components/nav/info__img/App__infoImg";
import App__subIfo from "./components/nav/sub__info/App__subIfo";
import App__product from "./components/nav/array__item/App__product";
import App__brands from "./components/nav/brands/App__brands";
import App__social from "./components/nav/social/App__social";
import App__spam from "./components/footer/spam/App__spam";
import App__info from "./components/footer/info/App__info";
import App__corporation from "./components/footer/corporation__info/App__corporation";

function App() {
    return (
        <div className=" wrapper " >
            <header>
                <App__header/>
                <App__menu/>
            </header>

            <nav className=" nav " >
                <div className=" container  ">
                    <App__infoImg />
                    <App__subIfo className=" margin " />
                    <p className=" title " > New Arrivals </p>
                    <div className=" sub-title_underline " />
                    <App__product/>
                    <App__brands/>
                    <App__social/>
                </div>
            </nav>

            <footer>
                <App__spam/>
                <App__info/>
                <App__corporation/>
            </footer>
        </div>
    );
}

export default App;