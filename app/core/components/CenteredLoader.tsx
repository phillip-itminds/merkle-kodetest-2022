import { FC } from "react"
import { Loader } from "../atoms/Loader"

import Styles from "./CenteredLoader.module.css"

export const CenteredLoader: FC = () => {
  return (
    <div className={Styles.centerContent}>
      <Loader />
    </div>
  )
}
