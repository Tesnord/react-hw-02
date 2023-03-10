export default function ContactList({ contacts, onClickDelete }) {
  const contactList = contacts;
  return (
    <ul>
      {contactList.length > 0 ? (
        contactList.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => onClickDelete(id)}>delete</button>
          </li>
        ))
      ) : (
        <li>
          <p>No contacts</p>
        </li>
      )}
    </ul>
  );
}
