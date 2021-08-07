import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Divider } from '@material-ui/core';

class ShoppingList extends (React.Component) {
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
                    <Button>Add Item</Button>
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
var ConnectedShoppingList = connect(mapStateToProps)(ShoppingList)
export default ConnectedShoppingList