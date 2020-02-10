import {
  RECEIVE_ALL_QUESTIONS,
  ADD_NEW_QUESTION,
  MARK_QUESTION_ANSWERED,
} from '../actions/questions'
import { LOGOUT } from '../actions/shared'

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return {
        ...action.questions,
      }

    // need to add question to "asked" object
    case ADD_NEW_QUESTION:
      return {
        ...state,
        asked: {
          ...state.asked,
          [action.question.id]: action.question,
        },
      }

    // need to move question from "unAnswered" to "answered"
    case MARK_QUESTION_ANSWERED: {
      delete state.unAnswered[action.question.id]

      return {
        ...state,
        answered: {
          ...state.answered,
          [action.question.id]: action.question,
        },
        unAnswered: { ...state.unAnswered },
      }
    }

    // resetting questions as it contains user specific data
    case LOGOUT:
      return {}

    default:
      return state
  }
}

export default questions
