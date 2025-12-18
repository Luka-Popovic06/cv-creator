const Input = ({
  inputType,
  inputPlaceholder,
  variation,
  action,
  inputName,
  value,
}) => {
  let inputClass;
  if (variation === "standard") inputClass = "standard";
  return (
    <input
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
      value={value}
      className={inputClass}
      onChange={(e) => action(e)}
    />
  );
};
export default Input;
