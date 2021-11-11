const VALID_CATEGORIES = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6"
]
export const getRandomCategory = () => {
  return VALID_CATEGORIES[Math.floor(Math.random()*VALID_CATEGORIES.length)]
}