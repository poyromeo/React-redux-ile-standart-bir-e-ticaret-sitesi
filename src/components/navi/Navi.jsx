import React from 'react';
import CartSummary from "../cart/CartSummary";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

export default class Navi extends React.Component {


    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">MyApp</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ms-auto" navbar>
                           <NavItem style={{marginRight: `85px`}}>
                               <CartSummary/>
                           </NavItem>
                           
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}