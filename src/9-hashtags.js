export const hashtags = (text) => {
  const returnHash = text.split('').filter(hashtags => hashtags.startsWith('#'))
  return returnHash
}