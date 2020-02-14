// these api exports will be used inside async action handlers
import {
  _getAllUsers,
  _getAllQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA'

export const getAllUsers = () => _getAllUsers()

export const getAllQuestions = authedUser => _getAllQuestions(authedUser)

export const saveQuestion = question => _saveQuestion(question)

export const saveQuestionAnswer = info => _saveQuestionAnswer(info)
