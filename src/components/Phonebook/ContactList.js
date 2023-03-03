export default function ContactList({ contacts, onClickDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => onClickDelete(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
