import { getImageUrl } from "app/utils/staticImgUtils"
import { resolver } from "blitz"

interface GetRandomTopStoriesInput {}
export interface Story {
  id: number
  url: string
  title: string
  time: number
  score: number
  by: string // Author ID.
  imageUrl: string
}

export default resolver.pipe(async ({}: GetRandomTopStoriesInput): Promise<Story[]> => {
  // Fetch all top story IDs.
  const topStoryIds = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(
    (res) => res.json()
  )

  // Pick 10 random top story IDs.
  const randomisedStoryIds = topStoryIds.sort(() => 0.5 - Math.random())
  const tenRandomStoryIds = randomisedStoryIds.slice(0, 10)

  // Fetch the stories.
  // Add random static image.
  const storyPromises = tenRandomStoryIds.map((storyId) =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
      .then((res) => res.json())
      .then((story) => ({
        ...story,
        imageUrl: getImageUrl(),
      }))
  )
  const stories = (await Promise.all(storyPromises)) as Story[]

  return stories
})
