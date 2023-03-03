export default function Filter({ value, onChange, s }) {
  return (
    <div>
      <p className={s.FilterContacts}>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange}></input>
    </div>
  );
}
