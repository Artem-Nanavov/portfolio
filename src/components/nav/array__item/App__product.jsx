import React, { Component } from "react"
import s from './App__product.module.css'
import App__productItem from '../product__component/App__productItem'
//======================================================
import boots__1 from '../../../assets/about/boots_1.png'
import boots__2 from '../../../assets/about/boots_2.png'
import boots__3 from '../../../assets/about/boots_3.png'
import had from '../../../assets/about/had.png'
//======================================================

class App__product extends Component {
    render() {
        return (
            <div className={ s.wrap } >
                <div className={ s.container } >
                    <div className={ s.margin } >
                        <App__productItem img={ boots__1 } />
                    </div>

                    <div className={ s.none_3 } >
                        <App__productItem img={ boots__2 } />
                    </div>

                    <div className={ s.none__2 } >
                        <App__productItem img={ boots__3 } />
                    </div>

                    <div className={ s.none } >
                        <App__productItem img={ had } />
                    </div>
                </div>
            </div>
        )
    }
}

export default App__product