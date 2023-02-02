import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from "components/ContactsList/ContactsList.module.css";

import { selectFilter, selectContacts } from 'redux/contacts/selectors';

export function ContactsList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
    );
    }

    const visibleContacts = getVisibleContacts();

    const onDeleteContact = id => dispatch(deleteContact(id));

    return (
            <ul className={css.list}  type="1">
                {visibleContacts.map(({ id, name, number }) => (
                    <li className={css.info} key={id}>
                        <p>{name}: {number}</p>
                        <button
                            type="button"
                            onClick={() => onDeleteContact(id)}
                        >Delete</button>
                    </li>
                ))}
            </ul>
    );
}

