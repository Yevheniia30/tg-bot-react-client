const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const handleClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onToggleButton,
    handleClose,
    tg,
    user: tg.initDataUnsafe?.user,
  };
};
