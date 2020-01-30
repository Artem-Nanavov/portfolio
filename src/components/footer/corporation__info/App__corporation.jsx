import React, { Component } from "react"
import s from './App__corporation.module.css'

class App__corporation extends Component {
    render() {
        return (
            <div className={ s.wrapper } >
                <div className={ s.container } >
                    <p className={ s.text }> © 2016. Quantum UI kit </p>

                    <p className={ s.text } > Privacy Policy </p>

                    <p className={ s.text } > Terms of Use </p>
                </div>
            </div>
        )
    }
}

export default App__corporation