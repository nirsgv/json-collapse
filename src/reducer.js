

const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_URL_TEXT_INPUT': {
            return {
                ...state,
                urlTextInput: action.payload
            }
        }

        case 'SET_TREE_DATA': {
            return {
                ...state,
                treeData: action.payload
            }
        }

        case 'SET_PRELOADER': {
            return {
                ...state,
                isPreloader: action.payload
            }
        }

        default:
            return state;
    }
};

export default reducer;