import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import UsersList from './UsersList'; 
import {browserHistory} from 'react-router';

class UsersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }
  
  componentWillMount() {
    this.props.actions.loadUsers();
  }

  redirectToAddUserPage() {
    browserHistory.push('/user/add');
  }

  handleDeleteUser(event) {
    event.preventDefault();
    this.props.actions.deleteUser(event.target.dataset.id);
  }

  render() {
    const {users} = this.props;
    return (
      <div>
        <h1>Пользователи</h1>
        <input type="submit"
               value="Добавить пользователя"
               className="btn btn-primary"
               onClick={this.redirectToAddUserPage}/>
        <UsersList handleDeleteUser={this.handleDeleteUser} users={users}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
