import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
    return (
        <>
        <Nav variant="pills"   defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link >LOGO</Nav.Link>
        </Nav.Item>
        <LinkContainer to='/' exact>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/Task' exact>
          <Nav.Link >Tasks</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/User' exact>
          <Nav.Link >User</Nav.Link>
        </LinkContainer>

      </Nav>
      </>
    )
}

export default Header
