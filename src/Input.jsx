const Input = ({
  inputType,
  inputPlaceholder,
  variation,
  action,
  inputName,
}) => {
  let inputClass;
  if (variation === "standard") inputClass = "standarad-input";
  return (
    <input
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
      className={inputClass}
      onChange={(e) => action(e.target.value)}
    />
  );
};
export default Input;
