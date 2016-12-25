import React, {PropTypes} from 'react';
import UsersListRow from './UsersListRow';

const UsersList = ({users}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Адрес</th>
        <th>Город</th>
        <th>Телефон</th>
      </tr>
      </thead>
      <tbody>
      {users.map(user =>
        <UsersListRow user={user}/>
      )}
      </tbody>
    </table>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;
