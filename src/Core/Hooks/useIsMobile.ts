import { useEffect, useState } from 'react'

// NEXT reference. Раскомментить если понадобиться более детальное засечение вьюпорта
// setViewport({
//   width: window.outerWidth,
//   height: window.outerHeight,
// })
// export const MAX_WIDTH_MOBILE = 481
// get isMobileViewport(): boolean {
//   return this.viewport.width < MAX_WIDTH_MOBILE && this.viewport.width > 0
// }

// get isDesktopViewport(): boolean {
//   return this.viewport.width >= DESKTOP_WIDTH
// }

// get isTabletViewport(): boolean {
//   return !this.isMobileViewport && !this.isDesktopViewport
// }

const getIsMobile = () => window.innerWidth <= 768

export const useIsMobile = (): [
  isMobileViewport: boolean,
  isMobileUA: boolean,
] => {
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
