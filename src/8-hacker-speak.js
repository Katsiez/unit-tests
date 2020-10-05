export const hackerSpeak = (words) => {
  const dictionary = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
    s: 5,
    A: 4,
    E: 3,
    I: 1,
    O: 0,
    S: 5,
  }
  const hackerSpeak = (words) => {
    return words.replace(/[aeios]/gi, (m) => dictionary[m])
  }
  document.write(hackerSpeak(''))
  return (words)
}
