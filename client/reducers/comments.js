function postComments(state, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                action.comment
            ]
        case 'REMOVE_COMMENT':
            console.log(state, action);
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
    }
    return state;
}

function comments(state = [], action) {
    if (action.postID !== undefined) {
        return {
            ...state,
            [action.postID]: postComments(state[action.postID], action)
        }
    }
    return state;
}

export default comments;