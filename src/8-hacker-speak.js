export const hackerSpeak = (words) => {

  words = words.replace(/a|A/ig, '4', /e|E/ig, '3', /i|I/ig, '1', /o|O/ig, '0', /s|S/ig, '5')
  return words
}

