import { createStore } from 'redux';


const INITIAL_STATE = {
    data: [],
    filtedData: [],
    searchText: '',
    numberOfPokemos: 20,
};


function pokemos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_POKEMOS':
            return { ...state, data: action.data }
        case 'CHANGE_SEARCH':
            return {
                ...state,
                searchText: action.searchText,
                filtedData: state.data.filter((value) => value.name.toLowerCase().includes(action.searchText))
            }
        case 'TOGGLE_NUMBER_POKES':
            return { ...state, numberOfPokemos: action.number }
        default:
            return state;
    }
}


const store = createStore(pokemos);

export default store;