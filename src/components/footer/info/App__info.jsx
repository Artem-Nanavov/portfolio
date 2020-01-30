import React, { Component } from "react"
import s from './App__info.module.css'

class App__info extends Component {
    render() {
        return (
            <div className={ s.wrapper } >
                <div className={ s.container } >

                          <div className={ s.listItem } >
                              <p className={ s.title } > About us </p>

                              <div className={ s.subTitle } >
                                  <p className={ s.item } > About </p>

                                  <p className={ s.item } > Our Story </p>

                                  <p className={ s.item } > Shipping </p>

                                  <p className={ s.item } > Careers </p>
                              </div>
                          </div>

                          <div className={ s.listItem } >
                              <p className={ s.title } > Category </p>

                              <div className={ s.subTitle } >
                                  <p className={ s.item } > Woman </p>

                                  <p className={ s.item } > Man </p>

                                  <p className={ s.item } > Kids </p>

                                  <p className={ s.item } > Other  </p>
                              </div>
                          </div>

                          <div className={ s.listItem } >
                              <p className={ s.title } > Support </p>

                              <div className={ s.subTitle } >
                                  <p className={ s.item } > FAQ </p>

                                  <p className={ s.item } > Support </p>

                                  <p className={ s.item } > Consultant </p>

                                  <p className={ s.item } > Return Policy </p>
                              </div>
                          </div>

                          <div className={ `${ s.listItem } ${ s.none_2 }` } >
                              <p className={ s.title } > Wholesale </p>

                              <div className={ s.subTitle } >
                                  <p className={ s.item } > Wholesale </p>

                                  <p className={ s.item } > Office Solutions </p>

                                  <p className={ s.item } > Press Resorce </p>
                              </div>
                          </div>

                          <div className={ `${ s.listItem } ${ s.none }` } >
                              <p className={ s.title } > Account </p>

                              <div className={ `${ s.subTitle } ${ s.margin }` } >
                                  <p className={ `${ s.item } ${ s.bottom }` } > Log in </p>

                                  <p className={ s.item } > Create Account </p>
                              </div>
                          </div>
                      </div>
            </div>
        )
    }
}

export default App__info