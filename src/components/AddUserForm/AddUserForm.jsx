import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users/usersOperations';

export const AddUserForm = ({ closeForm }) => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };
    dispatch(addUser(newUser));
    closeForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
