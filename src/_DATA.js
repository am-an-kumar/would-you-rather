let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: '',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo',
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: '',
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: '',
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
}

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory',
    },
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain',
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic',
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer',
    },
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500',
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift',
    },
  },
}

// generates a random ID to be used when a new question/poll is created
// eslint-disable-next-line no-unused-vars
const generateUID = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15)

// returns basic user info for all users
export const _getAllUsers = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) =>
    setTimeout(() => {
      // get all user id's
      const userIds = Object.keys(users)
      const userDetails = {}
      for (const userId of userIds) {
        userDetails[userId] = { ...users[userId] }
        userDetails[userId].score =
          users[userId].questions.length +
          Object.keys(users[userId].answers).length
        delete userDetails[userId].answers
      }
      resolve(userDetails)
    }, 500),
  )

// checks if a user has answered a question
const hasUserAnswered = (question, authedUser) => {
  const { optionOne, optionTwo } = question
  if (
    optionOne.votes.includes(authedUser) ||
    optionTwo.votes.includes(authedUser)
  ) {
    return true
  }
  return false
}

// returns basic question info for all questions and stats if the user has answered the question / is author of a question
export const _getAllQuestions = authedUser =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) =>
    setTimeout(() => {
      // get all question id's
      const questionIds = Object.keys(questions)
      const questionDetails = {}

      for (const questionId of questionIds) {
        questionDetails[questionId] = { ...questions[questionId] }

        // if the user created question / has answered questions, then we return the votes stats. The details of users who votes is never sent
        if (
          questionDetails[questionId].author === authedUser ||
          hasUserAnswered(questionDetails[questionId], authedUser)
        ) {
          questionDetails[questionId].optionOne.votes =
            questionDetails[questionId].optionOne.votes.length
          questionDetails[questionId].optionTwo.votes =
            questionDetails[questionId].optionTwo.votes.length
        }
        // stripping the votes stats as the user hasn't answered yet and is not the author for this question
        else {
          delete questionDetails[questionId].optionOne.votes
          delete questionDetails[questionId].optionTwo.votes
        }
        resolve(questionDetails)
      }
    }, 500),
  )

// formats the user input to create a new question/poll entry
const formatQuestion = ({ optionOneText, optionTwoText, author }) => {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  }
}

// adds a new question to the list of questions
export function _saveQuestion(question) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    const authedUser = question.author
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      // adding question to the questions object
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      }

      // updating user by adding the new question/poll id to the questions array of user
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      }

      // replacing votes [] with vote count for consistency of data in redux store
      formattedQuestion.optionOne.votes = 0
      formattedQuestion.optionTwo.votes = 0

      resolve(formattedQuestion)
    }, 1000)
  })
}

// saves answer of a question and updates users and questions data accordingly
export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // here qid is the question id, and answer is text, i.e. either optionOne or optionTwo

      if (authedUser === questions[qid].author) {
        reject()
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            // adding authedUser id to the votes [] of correct option
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      }

      const questionData = {
        ...questions[qid],
        optionOne: {
          ...questions[qid].optionOne,
          votes: questions[qid].optionOne.votes.length,
        },
        optionTwo: {
          ...questions[qid].optionTwo,
          votes: questions[qid].optionTwo.votes.length,
        },
      }

      resolve(questionData)
    }, 500)
  })
}
