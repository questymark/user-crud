import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUser } from 'ducks/users';


const getState = state => ({
    userLoading: state.users.userLoading,
    userLoaded: state.users.userLoaded,
    user: state.users.user
});

const getActions = dispatch => bindActionCreators({
    getUser
}, dispatch);


class UserCard extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentWillMount() {
        this.props.getUser(this.props.params.id);
    }

    render() {
        console.log(this.props);

        return(
            <div>UserCard</div>
        )
    }
}

export default connect(getState, getActions)(UserCard);