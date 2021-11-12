export default function roundFactory(startTime) {
  const calculateTime = (endTime) => {
    const roundTimeInMs = endTime - startTime
    return Math.floor(roundTimeInMs / 1000)
  }

  return { calculateTime }
}
