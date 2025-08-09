function generateId(label) {
  return label.replace(/\s+/g, '').replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase();
}

export default function Input({ label, type, change }) {
  const id = generateId(label);

  return (
    <div className="label">
      <label className="title" htmlFor={id}>{label}</label>
      <input name = {label} onChange = {change} type={type} id={id} />
    </div>
  );
}

export function TextArea({ label , change}) {
  const id = generateId(label);
  return (
    <div className="label">
      <label className="title" htmlFor={id}>{label}</label>
      <textarea name = {label} onChange = {change} id={id} />
    </div>
  );
}
