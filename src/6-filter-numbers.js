export const filterNumbers = (array, largerThan) => {
  return array.filter(number => {
    return number <= largerThan
  })
}

//Here I attempted using splice as well, but filtering did a better job at completing the test