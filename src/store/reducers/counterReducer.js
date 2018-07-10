import * as actions from '../actions';

const initialState = {
    counter: 0
}

export default (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case actions.INC_COUNTER:
            console.log('increment counter!');
            newState.counter++;
            break;
        default:
            break;
    }
    return newState;
}