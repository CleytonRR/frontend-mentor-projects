import React, {useState} from 'react'

import { ContainerMenu, Menu, LogoMenu, Hamburger, MenuItem, ButtonMenu } from "./style";

import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [open, setOpen] = useState(true)
    return (
        <ContainerMenu>
            <LogoMenu src={logo} />
            <Menu openMenu={open}>
                <MenuItem>How we work</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Account</MenuItem>
                <ButtonMenu>View Plans</ButtonMenu>
            </Menu>

            <Hamburger onClick={() => setOpen(!open)} openMenu={open} />
        </ContainerMenu>
    )
}

export default Navbar
