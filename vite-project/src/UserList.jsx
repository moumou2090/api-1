import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email} - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
