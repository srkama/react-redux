function like(index) {
    return {
        type: 'LIKE',
        index
    }
}

function addComment(postID, comment) {
    return {
        type: 'ADD_COMMENT',
        postID,
        comment
    }
}

function removeComment(postID, i) {
    return {
        type: 'REMOVE_COMMENT',
        postID,
        i
    }
}

export { removeComment, addComment, like };
