import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/users/usersOperations';
export const Modal = ({ closeModal, id }) => {
  const dispatch = useDispatch();

  const confirmDelete = () => {
    dispatch(deleteUser(id));
    closeModal();
  };
  return (
    <div>
      <div>
        <h2>Modal window</h2>
        <p>Are you sure to delete this user ?</p>
        <button onClick={confirmDelete}>Yes</button>
        <button
          onClick={() => {
            closeModal();
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};
