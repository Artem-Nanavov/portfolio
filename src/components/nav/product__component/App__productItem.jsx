import React, { Component } from "react"
import s from './App__product.module.css'
import d from '../../../assets/icon/icon.png'

class App__productItem extends Component {
    render() {
        return (
            <div className={ s.wrapper } >
                <div className={ s.container } >
                    <div className={ s.body } >

                        <div className={ s.new } >
                            <p className={ s.new__text } > new </p>
                        </div>

                        <img src={ this.props.img } alt="sorry"/>

                        <p className={ s.name__product } > Sony Dualshok 4 ( black ) </p>

                        <div className={ s.price }>
                            <p className={ s.price__text } > $432.72 </p>
                            <img src={ d } alt="sorry" className={ s.img__price } />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default App__productItem