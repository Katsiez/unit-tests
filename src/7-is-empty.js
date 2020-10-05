export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  }
  if (type === 'object') {
    return stringArrayOrObject === 0
  }
  return false
}


