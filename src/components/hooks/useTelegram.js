export function useTelegram() {

  const onClose = () => {
    window.Telegram.WebApp.close()
  }

  const onToggleButton = () => {
    if(window.Telegram.WebApp.MainButton.isVisible) {
      window.Telegram.WebApp.MainButton.hide()
    } else {
      window.Telegram.WebApp.MainButton.show()
    }
  }
  return {
    onToggleButton,
    onClose,
    user: window.Telegram.WebApp.initDataUnsafe?.user,
  }
}