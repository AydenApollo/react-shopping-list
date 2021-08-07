import deepcopy from "deepcopy";
var initialState = {
    shopping_list: [
    {name: 'Milk', in_cart: false},
    {name: 'Eggs', in_cart: false}
]
};

function slist_reducer(state, action) {
    if (state === undefined) {
        return initialState;
      }
      if (action.type === 'TOGGLE_IN_CART') {
        let new_state=deepcopy(state);
        new_state.shopping_list[action.data.index].in_cart= !new_state.shopping_list[action.data.index].in_cart;
      }
      else if (action.type === 'TOGGLE_IN_CART') {
        new_state.shopping_list.push({name: action.data.name, in_cart: false})
      }
      return new_state;
}


export default slist_reducer;