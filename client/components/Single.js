import React, { Component } from 'react'
import Photo from './Photo';
import Comments from './Comments';

export class Single extends Component {

    render() {
        const postIndex = this.props.posts.findIndex((v) => v.code === this.props.params.postID);
        const post = this.props.posts[postIndex]
        const postComments = this.props.comments[this.props.params.postID] || [];
        return (
            <div className="single-photo">
                <Photo post={post} i={postIndex} {...this.props}></Photo>
                <Comments postComments={postComments} {...this.props} />
            </div>
        )
    }
}

export default Single;
