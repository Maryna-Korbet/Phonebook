import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading,  selectError } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';


export default function Contacts() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <title>Your contacts</title>
            <ContactsForm />
            <Filter />
            <div>{isLoading && !error && <b>Request in progress...</b>}</div>
            <ContactsList />
        </div>
    );
}