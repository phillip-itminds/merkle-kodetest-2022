import { Image } from "blitz"
import { FC, useState } from "react"
import { ButtonLink } from "../atoms/ButtonLink"

import Styles from "./StoryEntry.module.css"

export type StoryEntryProps = {
  id: number
  url: string
  title: string
  time: number
  score: number
  imageUrl: string
  authorId: string
  authorKarma: number
}

export const StoryEntry: FC<StoryEntryProps> = ({
  url,
  title,
  time,
  score,
  imageUrl,
  authorId,
  authorKarma,
}) => {
  const [hasLoadedImage, setHasLoadedImage] = useState(false)
  const date = new Date(time)

  return (
    <div className={`${Styles.glassPane} ${Styles.fadeIn} ${!hasLoadedImage ?? Styles.isHidden}`}>
      <div className={Styles.paneCoverImgWrapper}>
        <Image
          className={Styles.paneCoverImg}
          alt="Story cover image"
          width={500}
          height={300}
          objectFit="cover"
          src={imageUrl}
          onLoadingComplete={() => setHasLoadedImage(true)}
        />
        <span className={Styles.paneCoverImgScore}>{score}</span>
      </div>
      <div className={Styles.paneHeader}>
        <h1>{title}</h1>
        <h2>By {authorId}</h2>
      </div>
      <div className={Styles.paneContent}>
        <table>
          <tbody>
            <tr>
              <td>Published</td>
              <td>{date.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Author Karma</td>
              <td>{authorKarma}</td>
            </tr>
          </tbody>
        </table>
        <div className={Styles.hideIfCanHover}>
          <ButtonLink href={url} variant="block">
            Go to story
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
