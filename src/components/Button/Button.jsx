import s from "./Button.module.css";

const Button = (props) => (
  <button className={s.button} {...props}>
    {props.children}
  </button>
);

export default Button;
