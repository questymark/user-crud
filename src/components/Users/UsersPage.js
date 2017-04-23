import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Button  from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

import UsersList from './UsersList';

import './UsersPage.less';

class UsersPage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return(
            <div className="UsersPage">
                <Link to="users/new">
                    <Button bsStyle="primary">Добавить</Button>
                </Link>
                <UsersList />
            </div>
        )
    }
}

export default UsersPage;