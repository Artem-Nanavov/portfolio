import React, { Component } from "react"
import s from './App__spam.module.css'
//=================================================
import twitterIcon from '../../../assets/icon/twitter.png'
import instagramIcon from '../../../assets/icon/instagramm.png'
import faceboockIcon from '../../../assets/icon/facebookicon.png'
//=================================================

class App__spam extends Component {
    render() {
        return (
            <div className={ s.wrapper } >
                <div className={ s.container } >
                    <div className={ `${ s.option } ${ s.none }` } >
                        <p className={ s.text } > en </p>
                        <p className={ s.text } > usd </p>
                    </div>

                    <div className={ s.mailing } >
                        <input placeholder=" Email address " className={ `${ s.input } ${ s.input_width }` }  type="text"/>
                        <div className={ `${ s.btn } ${ s.btn_width }` } > Subscribe </div>
                    </div>

                    <div className={ `${ s.social } ${ s.none__2 }` } >
                        <a href="https://twitter.com" className={ s.social__wrapper } >
                            <img src={ twitterIcon } alt=""/>
                        </a>

                        <a href="https://www.instagram.com" className={ s.social__wrapper } >
                            <img src={ instagramIcon } alt=""/>
                        </a>

                        <a href="https://www.facebook.com" className={ s.social__wrapper } >
                            <img src={ faceboockIcon } alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default App__spam