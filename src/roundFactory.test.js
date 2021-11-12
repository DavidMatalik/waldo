import roundFactory from './roundFactory'
import { jest } from '@jest/globals'

test('calculateTime returns the expected needed time in seconds', () => {
  jest.useFakeTimers().setSystemTime(1636705500000)
  const startTimeInMs = Date.now()

  jest.useFakeTimers().setSystemTime(1636705590677)
  const endTimeInMs = Date.now()

  const round = roundFactory(startTimeInMs)

  const roundTime = round.calculateTime(endTimeInMs)
  expect(roundTime).toBe(90)
})
