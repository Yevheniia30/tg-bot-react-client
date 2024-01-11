import { ButtonStyled } from "./Button.styled";

const tg = window.Telegram.WebApp;

const Button = () => {
  const handleClose = () => {
    tg.close();
  };
  return <ButtonStyled onClick={handleClose}>Закрити</ButtonStyled>;
};

export default Button;
