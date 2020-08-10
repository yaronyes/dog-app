import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './HeaderNav.css';

const HeaderNav = props => {
    const { hideNavbar } = props;

    return (
        <div className="header-nav">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={hideNavbar ? "hide-navbar" : ""}>
                <Navbar.Brand className="nav-brand" href="#/">Dog Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/breeds">Breeds</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}

export default HeaderNav;