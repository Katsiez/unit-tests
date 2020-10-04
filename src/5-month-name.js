const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber === 0 || monthNumber > 12) {
    return null
  } else {
    return months[monthNumber - 1]
  }
}
//I also tried writing the function out like this:
//if (monthNumber >= 12) { --AND also as (monthNumber <= 12)
//   return null
// } else {
//   return months[monthNumber - 1]
// }
// }
//Curiously enough, this did not work, instead I had to include the 0 in my if statement.
//Guess that is because the last 'it' statement has a monthName of 0.
