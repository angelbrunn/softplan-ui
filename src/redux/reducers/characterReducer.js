import {
    ADD_CHARACTER,
    UPDATE_CHARACTER,
    DELETE_CHARACTER
} from '../action/action';

export const initialState = [];

export default function characterReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return [...state, action.payload];
        case UPDATE_CHARACTER:
            state[0].character = action.payload.character;
            return [...state];
        case DELETE_CHARACTER:
            return state.filter(
                character => character.id !== action.payload.id
            );
        default:
            return state;
    }
}
