import { toast } from 'react-toastify'

type NotifyTypes = 'warn' | 'err'

export const notify = (text: string, type?: NotifyTypes): void => {
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
      })
      break
  }
}
