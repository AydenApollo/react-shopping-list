import react from 'react';
import { connect } from 'react-redux';

export function toggleinCart(data) {
    return {
        type: 'TOGGLE_IN_CART',
        data: {data}
    }
}

export function addItem(data) {
    return {
        type: 'TOGGLE_IN_CART',
        data: {data}
    }
}