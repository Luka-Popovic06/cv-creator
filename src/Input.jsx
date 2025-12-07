const Input = ({ inputType, inputName, variation }) => {
  let inputClass;
  if (variation === "standard") inputClass = "standarad-input";
  return (
    <input
      type={inputType}
      name={inputName}
      placeholder={inputName}
      className={inputClass}
    />
  );
};
export default Input;
