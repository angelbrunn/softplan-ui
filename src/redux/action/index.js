import { v4 as uuidv4 } from 'uuid';
import { ADD_CHARACTER, UPDATE_CHARACTER, DELETE_CHARACTER } from './action';

export const createCharacter = character => ({
    type: ADD_CHARACTER,
    payload: {
        id: uuidv4(),
        character: character
    }
});

export const updateCharacter = hero => ({
    type: UPDATE_CHARACTER,
    payload: {
        id: uuidv4(),
        character: hero
    }
});

export const deleteCharacter = id => ({
    type: DELETE_CHARACTER,
    payload: {
        id
    }
});
