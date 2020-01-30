import React, { Component } from "react";
import s from './App__header.module.css'
//=========================================================
import logoIcon from '../../assets/about/logo.png'
import searchIcon from '../../assets/icon/search.png'
import userIcon from '../../assets/icon/user.png'
import storeIcon from '../../assets/icon/icon.png'
//=========================================================

class App__header extends Component {
    render() {
        return(
            <div className={ s.header } >
                <div className={ s.header__wrapper }>

                    <div className={ s.text }>
                        <p className={ s.none } > 24/7 Customer Service </p>
                        <p className={ s.phoneNumber } > (800) 927 - 7671 </p>
                    </div>

                    <div className={ `${ s.logo } ${ s.none_2 }` } >
                        <img src={ logoIcon } alt="sorry"/>
                    </div>

                     <div className={ s.menu }>

                         <img src={ searchIcon } alt="sorry"/>
                         <img src={ userIcon } alt="sorry"/>
                         <div>
                             <span className={ s.point } ></span>
                             <img src={ storeIcon } alt="sorry"/>
                         </div>

                     </div>
                </div>
            </div>
        )
    }
}

export default App__header