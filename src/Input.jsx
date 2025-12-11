const Input = ({
  inputType,
  inputPlaceholder,
  variation,
  action,
  inputName,
  value,
}) => {
  let inputClass;
  if (variation === "standard") inputClass = "standarad-input";
  return (
    <input
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
      value={value}
      className={inputClass}
      onChange={(e) => action(e.target.value)}
    />
  );
};
export default Input;
