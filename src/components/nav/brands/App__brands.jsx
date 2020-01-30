import React, { Component } from "react"
import s from './App__brands.module.css'
//=================================================
import nbIcon from '../../../assets/icon/nb.png'
import addidasIcon from '../../../assets/icon/adidas.png'
import nikeIcon from '../../../assets/icon/nike.png'
import hmIcon from '../../../assets/icon/h&m.png'
import pumaIcon from '../../../assets/icon/puma.png'
import asicsIcon from '../../../assets/icon/asics.png'
//=================================================

class App__brands extends Component {
    render() {
        return (
            <div className={ s.wrap } >
                <div className={ s.wrapper } >
                    <div className={ s.container } >
                        <img src={ nbIcon } alt="sorry"/>
                        <img src={ addidasIcon } alt="sorry"/>
                        <img src={ nikeIcon } alt="sorry"/>
                        <img src={ hmIcon } alt="sorry"/>
                        <img src={ pumaIcon } alt="sorry"/>
                        <img src={ asicsIcon } alt="sorry"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App__brands