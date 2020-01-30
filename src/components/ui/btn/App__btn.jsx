import React, { Component } from "react"
import s from './App__menu.module.css'

class App__btn extends Component {
    render() {
        return(
            <div className={ s.btn } >
                <p className={ s.text } > Shop now </p>
            </div>
        )
    }
}

export default App__btn