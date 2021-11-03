export default function characterFactory(id, name) {
  let found = false

  const getName = () => name
  const getId = () => id
  const isFound = () => found
  const markAsFound = () => {
    found = true
  }

  return { getName, getId, markAsFound, isFound }
}