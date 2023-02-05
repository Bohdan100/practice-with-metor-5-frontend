import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { AddUserForm } from 'components/AddUserForm/AddUserForm';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersOperations';

export const UsersPage = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);

  const dispatch = useDispatch();

  const showUsers = () => {
    setIsListShown(true);
    dispatch(fetchUsers());
  };

  const openForm = () => {
    setIsFormShown(true);
  };

  const closeForm = () => {
    setIsFormShown(false);
  };
  return (
    <>
      <Button text={'Show users'} clickHandler={showUsers} />
      {isListShown && (
        <>
          <UsersList />
          <Button text="Add user" clickHandler={openForm} />
        </>
      )}
      {isFormShown && <AddUserForm closeForm={closeForm} />}
    </>
  );
};
