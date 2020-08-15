

const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_URL_TEXT_INPUT': {
            return {
                ...state,
                urlTextInput: action.payload
            }
        }

        default:
            return state;
    }
};

export default reducer;