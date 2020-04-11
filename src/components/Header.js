import React from 'react'
import { Menu, Header as H } from 'semantic-ui-react'

const Header = () => {
    return (
        <>
        <Menu size='large' borderless>
            <Menu.Item>
                <H as='h3'>
                    React Budget App 
                </H>
            </Menu.Item>
        </Menu>
        </>
    )
}

export default Header
