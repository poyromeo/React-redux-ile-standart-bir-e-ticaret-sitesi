import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Table, Button } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/ProductActions";
import * as cartActions from "../../redux/actions/CartActions";
import alertify from "alertifyjs";

class ProductList extends Component {

  componentDidMount() {
    this.props.actions.getProducts()
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
    alertify.success(product.name + "ürünü sepete eklendi.")
  }

  render() {
    return (
      <div>
        <br />
        <h3>
          <Badge style={{ color: `#000000` }} color="warning">Products</Badge>
          <Badge style={{ color: `#000000` }} color="success">{this.props.currentCategory.name}</Badge>
        </h3>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Unit In Stocks</th>
              <th>Quantity Per Unit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              this.props.products.map(product => (
                <tr key={product.productID}>
                  <th scope="row">{product.productID}</th>
                  <td>{product.name}</td>
                  <td>{product.unitPrice} ₺</td>
                  <td>{product.unitsInStock} adt.</td>
                  <td>{product.quantityPerUnit}</td>

                  <th>
                    <Button
                      onClick={() => this.addToCart(product)}
                      color="success">Add To Card</Button>
                  </th>
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
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


