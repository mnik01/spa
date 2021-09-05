import { toast } from 'react-toastify'

type NotifyTypes = 'warn' | 'err' | 'info'

type ToastPosition =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'

export const notify = (
  text: string,
  type?: NotifyTypes,
  parameters?: { position: ToastPosition },
): void => {
  switch (type) {
    case 'err':
      toast.info(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        ...parameters,
      })
      break

    case 'warn':
      toast.info(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        ...parameters,
      })
      break

    default:
      toast.info(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        ...parameters,
      })
      break
  }
}
