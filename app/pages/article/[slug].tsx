import { BlitzPage, useParam } from "blitz"

const ArticlePage: BlitzPage = () => {
  const slug = useParam("slug")
  return <div>{slug}</div>
}

export default ArticlePage
