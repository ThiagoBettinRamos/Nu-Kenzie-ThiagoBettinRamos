import "./style.css";

export function Input({ classes, label, name, type, placeholder, span, func, value }) {
  return (
    <div className={classes}>
      <label htmlFor={name}>{label}</label>
      <input value={value} id={name} type={type} placeholder={placeholder} onChange={(e) => func(e.target.value)} required="true" />
      {span && <span>{span}</span>}
    </div>
  );
}

