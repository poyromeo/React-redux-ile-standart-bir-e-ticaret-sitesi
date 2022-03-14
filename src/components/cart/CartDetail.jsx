import React, { Component } from 'react';
import { Table, Button } from "reactstrap";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/CartActions";
import alertify from 'alertifyjs';

class CartDetail extends Component {

    deleteFromCart(product) {
        this.props.actions.deleteFromCart(product)
        alertify.error(product.name + "ürün silindi...")
    }

    render() {
        return (
            <div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.cart.map(cartItem => (
                                <tr key={cartItem.product.productID}>
                                    <th scope="row">{cartItem.product.productID}</th>
                                    <td>{cartItem.product.name}</td>
                                    <td>{cartItem.product.unitPrice}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td> <Button
                                        onClick={() => this.deleteFromCart(cartItem.product)}
                                        color="danger">Delete</Button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </Table>
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



export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)
