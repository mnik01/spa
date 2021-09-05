import { useHistory } from 'react-router-dom'

export type RedirectFunction = (path: string) => void

export const useRedirect = (): RedirectFunction => {
  const history = useHistory()

  return (path: string) => {
    history.push(path)
  }
}
