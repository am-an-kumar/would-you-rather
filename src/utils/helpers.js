// will be used in React components to show poll timestamp in a user friendly format
export const formatDate = timestamp => {
  const date = new Date(timestamp)
  const time = date.toLocaleTimeString('en-US')
  return (
    time.substring(0, 5) + time.slice(-2) + ' | ' + date.toLocaleDateString()
  )
}

// finds ratio of 2 numbers, to be used in Stats component
export const findRatio = (firstValue, secondValue) => {
  if (firstValue + secondValue == 0) {
    return 0
  }
  return Math.floor((firstValue / (firstValue + secondValue)) * 100)
}

// formats questions based on timestamp, latest ones come first
export const convertQuestionsToArray = questions => {
  // sorting the question ids based on timestamp
  const sortedQuestions = Object.keys(questions).sort(
    (question1, question2) =>
      questions[question2].timestamp - questions[question1].timestamp,
  )
  const formattedQuestions = []
  for (const questionId of sortedQuestions) {
    formattedQuestions.push(questions[questionId])
  }
  return formattedQuestions
}
