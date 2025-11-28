export default function Button({ onClick, children, disabled = false }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
