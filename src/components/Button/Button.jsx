// import { ButtonStyled } from "./Button.styled";
import s from "./Button.module.css";

const tg = window.Telegram.WebApp;

const Button = () => {
  const handleClose = () => {
    tg.close();
  };
  return (
    <button className={s.button} onClick={handleClose}>
      Закрити
    </button>
  );
};

export default Button;
