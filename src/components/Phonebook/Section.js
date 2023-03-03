export default function Section({ title, children, s }) {
  return (
    <div className={s.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
