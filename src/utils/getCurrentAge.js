function getCurrentAge () {
  const birthYear = 2005
  const birthMonth = 8 // September (0-based index)
  const today = new Date()
  const age = today.getFullYear() - birthYear - (today.getMonth() <= birthMonth ? 1 : 0)

  return age
}

export default getCurrentAge
