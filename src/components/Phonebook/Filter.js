export default function Filter({ value, onChange }) {
  return (
    <div>
      <p className="FilterContacts">Find contacts by name</p>
      <input type="text" value={value} onChange={onChange}></input>
    </div>
  );
}
