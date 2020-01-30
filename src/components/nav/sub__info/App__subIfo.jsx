import React, { Component } from "react"
import s from './App__subInfo.module.css'
import App__btn from "../../ui/btn/App__btn";

class App__subIfo extends Component {
    render() {
        return(
            <div className={ s.wrap } >
                <div className={ s.container } >
                    <div className={ `${ s.img } ${ s.bg__1 }` } >
                        <div className={ s.img__wrapper }>
                            <div className={ s.info__wrapper }>
                                <p className={ s.info } > new 2017 </p>
                            </div>
                            <p className={ s.title }> Coats and jackets </p>
                            <App__btn/>
                        </div>
                    </div>

                    <div className={ `${ s.img } ${ s.bg__2 } ${ s.none__2 }` } >
                        <div className={ s.img__wrapper }>
                            <div className={ s.info__wrapper }>
                                <p className={ s.info } > sale </p>
                            </div>
                            <p className={ s.title }> Casual Sneakers </p>
                            <App__btn/>
                        </div>
                    </div>

                    <div className={ `${ s.img } ${ s.bg__3 } ${ s.none } ` } >
                        <div className={ s.sale } >
                            <div className={ s.sale__wrapper }>
                                <p className={ s.text } > Get 25% Off </p>
                                <p className={ s.text } > One item + Free </p>
                                <p className={ s.text } > Delivery </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App__subIfo