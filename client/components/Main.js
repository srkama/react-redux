import React, { Component } from 'react'
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

export class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">My Instagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const connectedApp = connect(mapStateToProps, mapDispatchtoProps)(Main)

export default connectedApp;