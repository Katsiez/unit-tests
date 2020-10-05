export const hashtags = (text) => {
  text.split('').filter(hashtags => hashtags.startsWith('#'))
  return text
}
