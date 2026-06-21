'use client'

import { useEffect, useState } from 'react'

export const WHATSAPP_NUMBER = '447947439321'
export const WHATSAPP_DISPLAY = '+44 7947 439321'

export const WHATSAPP_WEB_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
export const WHATSAPP_APP_LINK = `whatsapp://send?phone=${WHATSAPP_NUMBER}`

export function useWhatsAppLink() {
  const [href, setHref] = useState(WHATSAPP_WEB_LINK)

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|BlackBerry|webOS|Windows Phone/i.test(
      navigator.userAgent,
    )
    setHref(isMobile ? WHATSAPP_APP_LINK : WHATSAPP_WEB_LINK)
  }, [])

  return href
}
