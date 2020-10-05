
//
function hackerSpeak(words) {
  return words.replace(/a/ig, '4')
    // .replace(/A/ig, '4')
    .replace(/e/ig, '3')
    // .replace(/E/ig, '3')
    .replace(/i/ig, '1')
    // .replace(/I/ig, '1')
    .replace(/o/ig, '0')
    // .replace(/O/ig, '0')
    .replace(/s/ig, '5')
  // .replace(/S/ig, '5')
}
// hackerSpeak("javascript is cool")
// hackerSpeak("programming is fun")
// hackerSpeak("become a coder")
hackerSpeak("JAVASCRIPT IS COOL")
hackerSpeak("PROGRAMMING IS FUN")
hackerSpeak("BECOME A CODER")
