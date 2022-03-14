import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, NavItem, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/CartActions";
import {Link} from "react-router-dom";
import alertify from 'alertifyjs';

class cartSummary extends Component {

    deleteFromCart(product) {
        this.props.actions.deleteFromCart(product)
        alertify.error(product.name + " ürünü silindi...")
    }

    //Sepet boş ise...
    renderEmpity() {
        return (
            <NavItem>
                <NavLink>
                    Sepetiniz Boş
                </NavLink>
            </NavItem>
        )
    }

    //Sepet Dolu İse...
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu right>

                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem
                                key={cartItem.product.productID}
                            >
                                <Badge
                                    onClick={() => this.deleteFromCart(cartItem.product)}
                                    color='danger'>X</Badge>

                                {cartItem.product.name}

                                <Badge color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />
                    <DropdownItem>
                    <Link id="RouterNavLink" to="/cart">Sepete Git</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }


    render() {
        return (
            <div>
                {
                    //Eğer carttaki eleman sayısı sıfırdan büyükse renderSummary, değilse render Empity 
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpity()
                }
            </div>
        )
    }
}

//connect state
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

//connect actions
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            deleteFromCart: bindActionCreators(cartActions.deleteFromCart, dispatch),
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(cartSummary)
