import { getAllQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { toast } from 'react-toastify'

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

export const handleReceiveAllQuestions = authedUser => dispatch => {
  dispatch(showLoading())
  getAllQuestions(authedUser)
    .then(questions => {
      dispatch(receiveAllQuestions(questions))
      dispatch(hideLoading())
    })
    .catch(() => {
      dispatch(hideLoading())
      toast.error('Error occured')
    })
}

export const handleAddNewQuestion = (
  optionOneText,
  optionTwoText,
  author,
) => dispatch => {
  dispatch(showLoading())
  saveQuestion({ optionOneText, optionTwoText, author })
    .then(question => {
      dispatch(addNewQuestion(question))
      dispatch(hideLoading())
      toast.success('Poll created')
    })
    .catch(() => {
      dispatch(hideLoading())
      toast.error('Error occured')
    })
}

export const handleMarkQuestionAnswered = (
  authedUser,
  qid,
  answer,
) => dispatch => {
  dispatch(showLoading())
  saveQuestionAnswer({ authedUser, qid, answer })
    .then(question => {
      dispatch(markQuestionAnswered(question))
      dispatch(hideLoading())
      toast.success('Poll response saved')
    })
    .catch(() => {
      dispatch(hideLoading())
      toast.error('Error occured')
    })
}
