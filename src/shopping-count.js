import react from 'react'
import { connect } from 'react-redux'

class ShoppingCount extends (react.Component) {
    render() {
        return (
            <div>
                {this.props.shopping_list.length}
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {shopping_list: state.shopping_list}
}

var ConnectedCount = connect(mapStateToProps)(ConnectedCount)
export default ShoppingCount