export default function positionFactory(x, y, radius) {
  function getX() {
    return x
  }

  function getY() {
    return y
  }

  function getRadius() {
    return radius
  }

  return { getX, getY, getRadius }
}