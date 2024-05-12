import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';


export default function Contact ({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <div className={css.info}>
      <div className={css.data}>
        <p className={css.item}>
          <IoPersonSharp size={16} />
          <span>{name}</span>
        </p>

        <p className={css.item}>
          <FaPhone size={16} />
          <span>{number}</span>
        </p>
      </div>
      <button
        className={css.button}
        type="submit"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};