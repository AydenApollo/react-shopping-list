import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Divider, FormControlLabel } from '@material-ui/core';

import {toggleinCart} from './actions.js';

class ShoppingList extends (React.Component) {
    handleChange(event, index) {
        this.props.updateCart(index, event.target.value)
    }
    render() {
        return (
            <Card style={{maxWidth='500px', margin='30px auto'}}>
                <CardContent>
                <List>
               {this.props.shopping_list.map((item, index) => {
                return <ListItem key={index} dense divider>
                   <input type='checkbox'> {item.in_cart}</input>
                </ListItem>;
                })}
                </List>
                </CardContent>
                <CardActions>
                    <Button component={Link} to='/add'>Add Item</Button>
                </CardActions>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        shopping_list: state.shopping_list
    }
}

function mapDispatchToProps(dispatch) {
    return{
        toggleinCart: function(data) {
            dispatch(inCart(data))
        }
    }
}
var ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList)
export default ConnectedShoppingList