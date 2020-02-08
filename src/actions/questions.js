import { getAllQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const MARK_QUESTION_ANSWERED = 'MARK_QUESTION_ANSWERED'

const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions,
})

const addNewQuestion = question => ({
  type: ADD_NEW_QUESTION,
  question,
})

const markQuestionAnswered = question => ({
  type: MARK_QUESTION_ANSWERED,
  question,
})

export const handleReceiveAllQuestions = () => dispatch => {
  getAllQuestions()
    .then(questions => dispatch(receiveAllQuestions(questions)))
    .catch(() => console.error('Error occured'))
}

export const handleAddNewQuestion = () => dispatch => {
  saveQuestion()
    .then(question => dispatch(addNewQuestion(question)))
    .catch(() => console.error('Error occured'))
}

export const handleMarkQuestionAnswered = () => dispatch => {
  saveQuestionAnswer()
    .then(question => dispatch(markQuestionAnswered(question)))
    .catch(() => console.log('Error occured'))
}
