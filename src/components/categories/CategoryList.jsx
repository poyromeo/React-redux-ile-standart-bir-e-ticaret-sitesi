import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/CategoryActions";
import * as productActions from "../../redux/actions/ProductActions";

class CategoryList extends Component {

  componentDidMount() {
    this.props.actions.getCategories()
  }

  selectChangeCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.categoryID)
  }

  render() {
    return (
      <div>
        <br />
        <h3><Badge style={{color: `#000000`}} color="warning">Categories</Badge></h3>
        <ListGroup>

          {
            this.props.categories.map(category => (
              <ListGroupItem
                active={category.categoryID === this.props.currentCategory.categoryID}
                onClick={() =>this.selectChangeCategory(category)} key={category.categoryID}>

                {category.name}
              </ListGroupItem>

            ))
          }

        </ListGroup>
      </div>
    )
  }
}

//connect state
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

//connect actions
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
