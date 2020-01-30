import React, { Component } from "react";
import s from './App__infoImg.module.css'
import App__btn from "../../ui/btn/App__btn";

const App__infoImg = () => {
    return (
        <div className={ s.wrap } >
            <div className={ s.wrapper } >
                <div className={ s.container } >
                    <p className={ s.text } > summer 2017 </p>
                    <p className={ s.title } > New Look </p>
                    <App__btn/>
                </div>
            </div>
        </div>
    )
}

export default App__infoImg