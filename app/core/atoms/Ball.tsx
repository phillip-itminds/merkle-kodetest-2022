import { getRandomInt } from "app/utils/rngUtils"
import { CSSProperties, FC, useState } from "react"

import Styles from "./Ball.module.css"

const getRandomScreenPosition = () => {
  const padding = 10 // vw/vh padding.
  return {
    x: getRandomInt(padding, 100 - padding),
    y: getRandomInt(padding, 100 - padding),
  }
}

const getRandomSize = () => {
  const size = getRandomInt(50, 300)
  return {
    width: size,
    height: size,
  }
}

const getBallStyles = () => {
  const pos = getRandomScreenPosition()
  const size = getRandomSize()
  return {
    "--pos-x": `${pos.x}vw`,
    "--pos-y": `${pos.y}vh`,
    width: size.width,
    height: size.height,
  } as CSSProperties
}

export const Ball: FC = () => {
  const [styles] = useState(getBallStyles())

  return <div className={`${Styles.ball}`} style={styles} />
}
