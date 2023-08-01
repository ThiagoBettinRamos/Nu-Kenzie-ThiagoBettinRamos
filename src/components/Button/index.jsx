import "./styles.css";

export function Button({ text, func, classes, isSelected }) {
  return (
    <button onClick={func} className={isSelected ? `${classes}-selected` : classes}>
      {text}
    </button>
  );
}
