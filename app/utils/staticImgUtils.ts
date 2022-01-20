const imageUrls = [
  "/acropolis.jfif",
  "/arab-city.jfif",
  "/code.jfif",
  "/hacker.jfif",
  "/japan.jfif",
  "/laptop.jfif",
  "/lavender.jfif",
  "/plant.jfif",
  "/roman-forum.jfif",
  "/temple.jfif",
]

export const getImageUrl = () => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)]
}
