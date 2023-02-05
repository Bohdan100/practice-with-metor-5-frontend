import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/usersSelectors';

import { Modal } from '../Modal/Modal';

export const UsersList = () => {
  const users = useSelector(selectUsers);

  const [userId, setUserId] = useState(null);

  const openModal = id => {
    setUserId(id);
  };

  const closeModal = () => {
    setUserId(null);
  };

  console.log('users', users);
  return (
    <ul>
      {users.map(user => {
        return (
          <li>
            <p>{user.name}</p>
            <p>{user.email}</p>
            {/* <button type="button">Update user</button> */}
            <button
              type="button"
              onClick={() => {
                openModal(user.id);
              }}
            >
              Delete user
            </button>
          </li>
        );
      })}
      {userId && <Modal closeModal={closeModal} id={userId} />}
    </ul>
  );
};
