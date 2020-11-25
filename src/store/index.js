import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [],
    filtedData: [],
    searchText: null,
    numberOfPokemos: 21,
};

function pokemos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_POKEMOS':
            return { ...state, data: action.data }
        case 'TOGGLE_NUMBER_POKES':
            return { ...state, numberOfPokemos: action.numberOfPokemos }
        case 'CHANGE_SEARCH':
            if (action.searchText == null) {
                return {
                    ...state,
                    filtedData: [],
                    searchText: action.searchText,
                }
            } else {
                return {
                    ...state,
                    searchText: action.searchText,
                    filtedData: state.data.filter((value) =>
                        value.name.toLowerCase().includes(action.searchText.toLowerCase()))
                }
            }
        default:
            return state;
    }
}


const store = createStore(pokemos);

export default store;