import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import RegisterModel from './auth/RegisterModel';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

AppNavbar.propTypes = {

};

function AppNavbar(props) {

    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    }
    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={toggle}></NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto">
                            <NavItem>
                                <RegisterModel />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default AppNavbar;