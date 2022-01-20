import { CSSProperties, FC, useMemo } from "react"
import { NonTouchLink } from "./NonTouchLink"
import { StoryEntry } from "./StoryEntry"

import Styles from "./StoryList.module.css"

export type StoryListProps = {
  stories: {
    id: number
    url: string
    title: string
    time: number
    score: number
    imageUrl: string
    authorId: string
    authorKarma: number
  }[]
}

export const StoryList: FC<StoryListProps> = ({ stories }) => {
  const sortedStories = useMemo(() => [...stories].sort((sA, sB) => sB.score - sA.score), [stories])

  return (
    <div className={Styles.entryList}>
      {sortedStories?.map((story, idx) => (
        <div
          key={story.id}
          className={Styles.entryWrapper}
          style={{ "--stagger-order": idx + 1 } as CSSProperties}
        >
          <NonTouchLink url={story.url}>
            <StoryEntry
              id={story.id}
              url={story.url}
              title={story.title}
              time={story.time}
              score={story.score}
              imageUrl={story.imageUrl}
              authorId={story.authorId}
              authorKarma={story.authorKarma}
            />
          </NonTouchLink>
        </div>
      ))}
    </div>
  )
}
