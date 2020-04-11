import React from 'react'
import { Menu, Image } from 'semantic-ui-react'

import appStyle from '../App.module.css'

const Header = () => {
    return (
        <>
        <Menu size='large' borderless>
            <Menu.Item>
                <Image src="/logo.png" className={appStyle.logo} />
            </Menu.Item>
        </Menu>
        </>
    )
}

export default Header
