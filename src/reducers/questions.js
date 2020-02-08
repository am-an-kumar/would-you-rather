import {
  RECEIVE_ALL_QUESTIONS,
  ADD_NEW_QUESTION,
  MARK_QUESTION_ANSWERED,
} from '../actions/questions'

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }

    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
        },
      }

    case MARK_QUESTION_ANSWERED:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
        },
      }

    default:
      return state
  }
}

export default questions
