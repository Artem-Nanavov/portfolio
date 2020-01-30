import React, { Component } from "react";
import { Menu, Dropdown, Icon } from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App__menuItem extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">

                    <div>
                        1st menu item
                    </div>

                </Menu.Item>

                <Menu.Item key="1">

                    <div>
                        2nd menu item
                    </div>

                </Menu.Item>
            </Menu>
        )

        return (
            <Dropdown overlay={ menu }>

                <div className="ant-dropdown-link" >
                    { this.props.title } <Icon type="down" />
                </div>

            </Dropdown>
        )
    }
}

export default App__menuItem
