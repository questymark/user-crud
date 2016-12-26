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
  }
  
  componentWillMount() {
    this.props.actions.loadUsers();
  }

  // checkRequired() {
  //   let disabled = false;
  //   let empty = [];
  //   const {promocode, required, errors} = this.state;
  //   required.forEach(key => {
  //     if (promocode[key] === "" || (promocode[key] instanceof Array && !promocode[key].length) || promocode[key] === null) {
  //       empty.push(key);
  //       errors[key] = 'Поле обязательно для заполнения';
  //     } else {
  //       let index = empty.indexOf(key);
  //       if (index >= 0) {
  //         empty.splice(index, 1)
  //       }
  //       errors[key] = '';
  //     }
  //   });
  //
  //   if (empty.length) {
  //     disabled = true;
  //   }
  //
  //   return disabled;
  // }

  redirectToAddUserPage() {
    browserHistory.push('/user/add');
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
        <UsersList users={users}/>
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
