import { CenteredLoader } from "app/core/components/CenteredLoader"
import { ErrorFallback } from "app/core/components/ErrorFallback"
import { StoryList } from "app/core/components/StoryList"
import getRandomTopStories from "app/stories/queries/getRandomTopStories"
import { BlitzPage, ErrorBoundary, useQuery } from "blitz"
import { Suspense, useMemo } from "react"

import Styles from "./index.module.css"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  const [stories] = useQuery(getRandomTopStories, {})

  const fullStories = useMemo(
    () =>
      stories?.map((story) => ({
        ...story,
        authorId: story.by,
        authorKarma: 1234,
      })) ?? [],
    [stories]
  )

  return (
    <>
      <div className={Styles.pageBackground} />
      <div className={Styles.pageBackgroundTextColor}>
        <main>
          <div className={Styles.pageHeading}>
            <h1>Top Hacker News Stories</h1>
          </div>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<CenteredLoader />}>
              <StoryList stories={fullStories} />
            </Suspense>
          </ErrorBoundary>
        </main>

        <footer className={Styles.footer}>Made with ☕ by Phillip Phoelich</footer>
      </div>
    </>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
