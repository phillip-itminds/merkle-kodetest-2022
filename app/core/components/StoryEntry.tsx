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
      <div className={Styles.paneCoverImg}>
        <Image
          alt="Story cover image"
          width={500}
          height={300}
          objectFit="cover"
          src={imageUrl}
          onLoadingComplete={() => setHasLoadedImage(true)}
        />
      </div>
      <div className={Styles.paneHeader}>
        <h2>{title}</h2>
      </div>
      <div className={Styles.paneContent}>
        <table>
          <tr>
            <td>Published</td>
            <td>{date.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Score</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Author</td>
            <td>{authorId}</td>
          </tr>
          <tr>
            <td>Author Karma</td>
            <td>{authorKarma}</td>
          </tr>
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
