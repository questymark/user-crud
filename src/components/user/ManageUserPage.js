import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as userActions from '../../actions/userActions';
import UserForm from './UserForm';
import toastr from 'toastr';

export class ManageUserPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {},
      errors: {},
      saving: false,
      error: false
    };

    this.saveUser = this.saveUser.bind(this);
  }

  componentWillMount() {
    if (this.props.params.id) {
      this.props.actions.getUser(this.props.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id) {
      this.setState({user: nextProps.user});
    }
  }

  saveUser(event) {
    event.preventDefault();
    this.setState({saving: true});

    this.props.actions.saveUser(this.state.user)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Пользователь успешно сохранен');
    browserHistory.push('/');
  }

  onChangeInput(type, event) {
    let user = Object.assign({}, this.state.user, {[type]: event.target.value});
    this.setState({user});
  }

  onChangeSelect(type, event) {
    console.log(type, event.target.value);
    let birthday = this.state.user.birthday ? this.state.user.birthday : "";
    let day = birthday.split('.')[0];
    let month = birthday.split('.')[1];
    let year = birthday.split('.')[2];
    let user;

    switch (type) {
      case 'day':
        day = event.target.value;
        user = Object.assign({}, this.state.user, {birthday: `${day}.${month}.${year}`});
        this.setState({user});
        break;
      case 'month':
        month = event.target.value;
        user = Object.assign({}, this.state.user, {birthday: `${day}.${month}.${year}`});
        this.setState({user});
        break;
      case 'year':
        year = event.target.value;
        user = Object.assign({}, this.state.user, {birthday: `${day}.${month}.${year}`});
        this.setState({user});
        break;
    }
  }

  render() {
    const {user} = this.state;
    let day, month, year;
    if (this.props.params.id && Object.keys(user).length) {
      day = user.birthday.split('.')[0];
      month = user.birthday.split('.')[1];
      year = user.birthday.split('.')[2];
    }

    return (
      <UserForm
        user={user}
        day={day}
        month={month}
        year={year}
        errors={this.state.errors}
        onChange={this.onChangeInput.bind(this)}
        onChangeSelect={this.onChangeSelect.bind(this)}
        saving={this.state.saving}
        valid={this.state.error}
        onSave={this.saveUser.bind(this)}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);