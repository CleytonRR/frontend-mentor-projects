import React from 'react'

import { ContainerMenu, Menu, LogoMenu, MenuItem, ButtonMenu } from "./style";

import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <ContainerMenu>
            <LogoMenu src={logo} />
            <Menu>
                <MenuItem>How we work</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Account</MenuItem>
                <ButtonMenu>View Plans</ButtonMenu>
            </Menu>
        </ContainerMenu>
    )
}

export default Navbar