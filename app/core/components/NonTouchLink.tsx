import { FC } from "react"

import Styles from "./NonTouchLink.module.css"

export type NonTouchLinkProps = {
  url: string
}

/**
 * This component is used to wrap an element with a link, if this is not a touch device.
 * Can be used to alter behaviour based on device type.
 */
export const NonTouchLink: FC<NonTouchLinkProps> = ({ children, url }) => {
  const isTouchDevice = window.matchMedia("(hover: none)").matches

  return isTouchDevice || !url ? (
    <>{children}</>
  ) : (
    <a className={Styles.link} href={url}>
      {children}
    </a>
  )
}
