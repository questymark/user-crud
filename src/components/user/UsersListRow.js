import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UsersListRow = ({user}) => { 
  return (
    <tr key={user.id}>  
      <td><a href={`user/${user.id}`}>{user.name}</a></td>
      <td>{user.birthday}</td>
      <td>{user.adress}</td>
      <td>{user.city}</td>
      <td>{user.phone}</td>
    </tr>
  );
};

UsersListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UsersListRow;
