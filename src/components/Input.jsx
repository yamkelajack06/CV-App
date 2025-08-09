export default function Input({ label, type }) {
  return (
    <div className="label">
      <label className = "title" for={label}>{label}</label>
      <input type={type} id={label} />
    </div>
  );
}

export function TextArea({label}) {
  return (
    <div className="label">
      <label className = "title" for={label}>{label}</label>
      <textarea id={label} />
    </div>
  );
}
