export const hackerSpeak = (words) => {

  words = words.replace(/a|A/ig, '4')
  words = words.replace(/e|E/ig, '3')
  words = words.replace(/i|I/ig, '1')
  words = words.replace(/o|O/ig, '0')
  words = words.replace(/s|S/ig, '5')
  return words
}

