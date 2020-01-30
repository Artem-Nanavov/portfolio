import React, { Component } from "react";
import s from './App__menu.module.css'
import App__menuItem from "../menu__item/App__menuItem";

class App__menu extends Component {
    render() {
        return(
            <div className={ s.wrapper } >
                <div className={ s.menu }>
                    <App__menuItem title=" Woman " />
                    <App__menuItem title=" Man " />
                    <App__menuItem title=" Kids " />
                    <App__menuItem title=" Home " />
                    <div className={ s.none } >
                        <App__menuItem title=" Sale " />
                    </div>
                    <div className={ s.none } >
                        <App__menuItem title=" Magazine " />
                    </div>
                </div>
            </div>
        )
    }
}

export default App__menu