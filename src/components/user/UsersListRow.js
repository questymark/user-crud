import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UsersListRow = ({user, handleDeleteUser}) => { 
  return (
    <tr key={user.id}>  
      <td><a href={`user/${user.id}`}>{user.name}</a></td>
      <td>{user.birthday}</td>
      <td>{user.adress}</td>
      <td>{user.city}</td>
      <td>{user.phone}</td>
      <input 
        type="submit" 
        value="Удалить" 
        data-id={user.id} 
        className="btn btn-danger" 
        onClick={handleDeleteUser}
      />
    </tr>
    
  );
};

UsersListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UsersListRow;
