import characterFactory from './characterFactory'

let character = null

beforeEach(() => {
  const id = 'abc1234'
  const name = 'David'
  character = characterFactory(id, name) 
})

test('getName returns name of character', () => {
  expect(character.getName()).not.toMatch('Tom')
  expect(character.getName()).toMatch('David')
})

test('getId returns id of character', () => {
  expect(character.getId()).toBe('abc1234')
})

test('isFound returns false after character creation', () => {
  expect(character.isFound()).toBeFalsy()
})

test('isFound returns true after calling markAsFound', () => {
  character.markAsFound()
  expect(character.isFound()).toBeTruthy()
})