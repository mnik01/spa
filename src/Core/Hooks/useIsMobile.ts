import { useEffect, useState } from 'react'

const getIsMobile = () => window.innerWidth <= 768

export const useIsMobile = (): boolean[] => {
  const [isMobileViewport, setIsMobileViewport] = useState(getIsMobile())

  useEffect(() => {
    const onResize = () => {
      setIsMobileViewport(getIsMobile())
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const [isMobileUA, setIsMobileUA] = useState(false)

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(
      /android|blackberry|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(
        userAgent,
      ),
    )
    setIsMobileUA(mobile)
  }, [])

  return [isMobileViewport, isMobileUA]
}
