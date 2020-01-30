import React, { Component } from "react"
import s from './App__social.module.css'

//===============================================
import twitterIcon from '../../../assets/icon/twiiter.png'
import InstagramIcon from '../../../assets/icon/instagram.png'
import pinterestIcon from '../../../assets/icon/pinterest.png'
import faceboock from '../../../assets/icon/facebook.png'
import youTubeIcn from '../../../assets/icon/youtube.png'
import tumblr from '../../../assets/icon/tumblr.png'
//===============================================

class App__social extends Component {
    render() {
        return (
            <div className={ s.wrap } >
                <div className={ s.wrapper } >
                    <div className={ s.container }>
                        <p className={ s.title } > Our Social Groups </p>

                        <div className={ s.social }>

                            <div className={ s.social__wrapper } >
                                <div className={ s.social__twitter }>
                                    <img src={ twitterIcon } alt=""/>
                                </div>

                                <a href="https://twitter.com" className={ s.text } > Twitter > </a>
                            </div>

                            <div className={ s.social__wrapper } >
                                <div className={ s.social__Instagram }>
                                    <img src={ InstagramIcon } alt=""/>
                                </div>

                                <a href="https://www.instagram.com" className={ s.text } > Instagram  > </a>
                            </div>

                            <div className={ `${ s.social__wrapper } ${ s.none }` } >
                                <div className={ s.social__Pinterest }>
                                    <img src={ pinterestIcon } alt=""/>
                                </div>

                                <a href="https://www.pinterest.ru" className={ s.text } > Pinterest > </a>
                            </div>

                            <div className={ s.social__wrapper } >
                                <div className={ s.social__Faceboock } >
                                    <img src={ faceboock } alt=""/>
                                </div>

                                <a href="https://www.facebook.com" className={ s.text } > Faceboock > </a>
                            </div>

                            <div className={ `${ s.social__wrapper } ${ s.none }` } >
                                <div className={ s.social__YouTube }>
                                    <img src={ youTubeIcn } alt=""/>
                                </div>

                                <a href="https://www.youtube.com" className={ s.text } > YouTube > </a>
                            </div>

                            <div className={ `${ s.social__wrapper } ${ s.none }` } >
                                <div className={ s.social__Tumblr } >
                                    <img src={ tumblr } alt=""/>
                                </div>

                                <a href="https://www.tumblr.com" className={ s.text } > Tumblr > </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default App__social
