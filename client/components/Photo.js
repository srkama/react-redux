import React, { Component } from 'react'
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';


export class Photo extends Component {
    render() {
        const { post, i, comments } = this.props
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`view/${post.code}`}>
                        <img src={`https://loremflickr.com/320/240?random=${i}`} alt={post.caption} className="grid-photo" />
                    </Link>

                </div>
                <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    <span key={post.likes} className="likes-heart">{post.likes}</span>
                </CSSTransitionGroup>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes" onClick={this.props.like.bind(null, i)}>&hearts; {post.likes}</button>
                        <Link className="button" to={`view/${post.code}`}>
                            <span className="speech-bubble"> </span>
                            {comments[post.code] ? `${comments[post.code].length}` : 0}
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
}

export default Photo
