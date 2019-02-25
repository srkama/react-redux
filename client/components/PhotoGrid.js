import React, { Component } from 'react'
import Photo from './Photo';

export class PhotoGrid extends Component {
    render() {
        console.log(this.props.comments)
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => {
                    const comments = this.props.comments[post.code] ? this.props.comments[post.code] : [];
                    return (
                        <Photo post={post} key={i} i={i} {...this.props}></Photo>
                    )
                })}
            </div>
        )
    }
}

export default PhotoGrid;
