const Button = ({ type, onClick, name, buttonType }) => {
  return <button className={'m-1 btn btn-' + buttonType} type={type} onClick={onClick}>{name}</button>
};

export default Button;
