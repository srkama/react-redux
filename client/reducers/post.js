function posts(state = [], action) {
    switch (action.type) {
        case 'LIKE':
            return [
                ...state.slice(0, action.index),
                { ...state[action.index], likes: state[action.index].likes + 1 },
                ...state.slice(action.index + 1)
            ]
    }
    return state;
}

export default posts;