import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { getUserList } from 'ducks/users';

import './UsersList.less';

const getState = state => ({
    userListLoading: state.users.userListLoading,
    userListLoaded: state.users.userListLoaded,
    userList: state.users.userList
});

const getActions = dispatch => bindActionCreators({
    getUserList
}, dispatch);

class UsersList extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentWillMount() {
        this.props.getUserList()
    }

    onClickTableRow(id) {
        browserHistory.push(`users/card/${id}`);
    }

    renderEmpty() {
        return(
            <div>Список пуст</div>
        )
    }

    renderLoading() {
        <div>Загрузка</div>
    }

    render() {
        const { userList, userListLoading, userListLoaded } = this.props;
        //
        // if (userListLoading) return this.renderLoading();
        //
        // if (userListLoaded && !userList.length) return this.renderEmpty();

        return(
            <div>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Дата рождения</th>
                        <th>Город</th>
                        <th>Адрес</th>
                        <th>Телефон</th>
                    </tr>
                    </thead>
                    <tbody>

                    {userList && userList.map(user => {
                        return(
                            <tr className="table__tr_cursor" index={user._id} onClick={this.onClickTableRow.bind(this, user._id)}>
                                <td>{user.name}</td>
                                <td>{user.birthday}</td>
                                <td>{user.city}</td>
                                <td>{user.adress}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default connect(getState, getActions)(UsersList);