const Button = ({ variation, children, btnType, clickAction }) => {
  let btnClass;
  if (variation === "standard") btnClass = "standard-btn";
  if (variation === "primary") btnClass = "primary-btn";
  if (variation === "secondary") btnClass = "secondary-btn";
  return (
    <button type={btnType} className={btnClass} onClick={clickAction}>
      {children}
    </button>
  );
};
export default Button;
