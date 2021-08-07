import React from 'react';
import { connect } from 'react-redux'
import {addItem} from './actions.js'

class AddItem extends (React.Component) {
    constructor (props) {
        super(props)
        this.state - {item: ''}
    }
    handleSubmit(event){
    event.preventDefault();
    if (!this.state.item) {
        alert('Nothing Added')
    } else {

        this.props.addItem({name: this.state.item})
        this.setState({item: ''})
    }
    }

    updateItem (event) {
        this.setState({item: event.target.value})
    }

    go_back(event) {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <AddItem/>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: function (data) {
            dispatch(addItem(data))
        }
    }
}

var ConnectedAddItem = connect(mapStateToProps, mapDispatchToProps)(AddItem)
export default ConnectedAddItem