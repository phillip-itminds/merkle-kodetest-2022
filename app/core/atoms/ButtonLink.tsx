import { FC } from "react"

import Styles from "./ButtonLink.module.css"

export type ButtonLinkProps = {
  variant?: "default" | "block"
  href: string
}

export const ButtonLink: FC<ButtonLinkProps> = ({ children, href, variant = "default" }) => {
  return (
    <a href={href} className={`${Styles.button} ${variant === "block" ? Styles.block : ""}`}>
      {children}
    </a>
  )
}
