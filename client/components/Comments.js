import React, { Component } from 'react'

export class Comments extends Component {

    constructor(props) {
        super(props);
        this.renderComments = this.renderComments.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const postID = this.props.params.postID
        const comment = {
            user: this.refs.user.value,
            text: this.refs.comment.value
        }
        this.props.addComment(postID, comment)
        this.refs.commentForm.reset();
    }

    renderComments(comment, i) {
        console.log(this);
        return (
            <div className="comment" key={i}>
                <strong>{comment.user}</strong>{comment.text}
                <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postID, i)}>&times;</button>
            </div>
        )
    }

    render() {
        console.log(this.props);
        return (
            <div className="commments">
                {this.props.postComments.map(this.renderComments)}
                <form className="comment-form" ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="user" placeholder="user" />
                    <input type="text" ref="comment" placeholder="commment" />
                    <button type="submit" hidden></button>
                </form>
            </div>
        )
    }
}

export default Comments
