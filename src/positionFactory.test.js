import positionFactory from './positionFactory'

let position = null

beforeEach(() => {
  const x = 5
  const y = 10
  const radius = 2

  position = positionFactory(x, y, radius)
})

test('getX returns x-coordinate', () => {
  expect(position.getX()).toBe(5)
}) 

test('getY returns y-coordinate', () => {
  expect(position.getY()).toBe(10)
}) 

test('getRadius returns radius', () => { 
  expect(position.getRadius()).toBe(2)
}) 
