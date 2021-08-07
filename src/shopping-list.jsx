import React from 'react';
import { connect } from 'react-redux';

class ShoppingList extends (React.Component) {
    render() {
        return (
            <div>
                <ul>
               {this.props.contacts.map((item, index) => {
                return <li key={index}>
                   <input type='checkbox'> {item.name}</input>
                </li>;
                })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shopping_list: state.shopping_list
    }
}
var ConnectedShoppingList = connect(mapStateToProps)(ShoppingList)
export default ConnectedShoppingList