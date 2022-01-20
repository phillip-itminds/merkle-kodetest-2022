import { FC } from "react"

import Styles from "./Button.module.css"

export type ButtonProps = {
  variant?: "default" | "block"
}

export const Button: FC<ButtonProps> = ({ children, variant = "default" }) => {
  return (
    <button className={`${Styles.button} ${variant === "block" ? Styles.block : ""}`}>
      {children}
    </button>
  )
}
