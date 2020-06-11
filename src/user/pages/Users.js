import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Iron Man',
      image:
        'https://i.ytimg.com/vi/RbXFpHYJtcY/maxresdefault.jpg',
      places: 3
    },
    {
      id: 'u2',
      name: 'Doctor Strange',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjZlOTczYjItMDI2NC00Yjg2LWJiMmEtY2E1OWViMTg2ZWYzXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg',
      places: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
