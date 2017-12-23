import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = (props) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <span>{props.title}</span>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/">
                    <NavItem eventkey={1}>Test</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem eventkey={2}>About</NavItem>
                </LinkContainer>
                <LinkContainer to="/status">
                    <NavItem eventkey={1}>User Status</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                {!props.isAuthenticated &&
                    <LinkContainer to="/register">
                        <NavItem eventkey={1}>Register</NavItem>
                    </LinkContainer>
                }
                {!props.isAuthenticated &&
                    <LinkContainer to="/login">
                        <NavItem eventkey={2}>Log In</NavItem>
                    </LinkContainer>
                }
                {props.isAuthenticated &&
                    <LinkContainer to="/logout">
                        <NavItem eventkey={1}>Log Out</NavItem>
                    </LinkContainer>
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;