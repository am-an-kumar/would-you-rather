import _ from 'lodash'

let users = {
  dllanor: {
    id: 'dllanor',
    name: 'Ronalld',
    avatarURL:
      'https://media-exp1.licdn.com/dms/image/C4E03AQFr0eaoR9wh1A/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=LxZVlO3onxfuzQGNCxNtN42a_uLJrgy7R0D2br6pu8s',
    answers: {
      am8ehyc8byjqgar0jgpubg: 'optionOne',
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
    },
    questions: ['8xf0y6ziyjabvozdd255xd'],
  },
  amank: {
    id: 'amank',
    name: 'Aman Kumar',
    avatarURL:
      'https://media-exp1.licdn.com/dms/image/C5103AQF1ZSXIWCwMdA/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=UK0uToQiW04WN2gaxRRbhG3IRnfbeDsOIXS5XoroSzU',
    answers: {
      '8xf0y6ziyjabvozdd255xd': 'optionTwo',
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
    },
    questions: ['am8ehyc8byjqgar0jgpubg'],
  },
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
    answers: {
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  dan_abramov: {
    id: 'dan_abramov',
    name: 'Dan Abramov',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/dan.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionTwo',
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
}

let questions = {
  am8ehyc8byjqgar0jgpubg: {
    id: 'am8ehyc8byjqgar0jgpubg',
    author: 'amank',
    timestamp: 1467166871614,
    optionOne: {
      votes: ['dllanor'],
      text: 'be batman',
    },
    optionTwo: {
      votes: [],
      text: 'be joker',
    },
  },
  '8xf0y6ziyjabvozdd255xd': {
    id: '8xf0y6ziyjabvozdd255xd',
    author: 'dllanor',
    timestamp: 1467166872614,
    optionOne: {
      votes: [],
      text: 'use facebook',
    },
    optionTwo: {
      votes: ['amank'],
      text: 'use instagram',
    },
  },
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['amank', 'dllanor'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: ['tylermcginnis', 'dan_abromov'],
      text: 'have horrible long term memory',
    },
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'dan_abramov',
    timestamp: 1468479767190,
    optionOne: {
      votes: ['sarahedo', 'dllanor'],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['tylermcginnis', 'amank'],
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
      votes: [],
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
      votes: ['sarahedo'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['dan_abramov'],
      text: 'have your best friend find $500',
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'dan_abramov',
    timestamp: 1493579767190,
    optionOne: {
      votes: [],
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
        userDetails[userId] = _.cloneDeep(users[userId], true)
        userDetails[userId].asked = users[userId].questions.length
        userDetails[userId].answered = Object.keys(users[userId].answers).length

        // removing answers to make sure the authedUser is not able to see the options selected by other users
        delete userDetails[userId].answers
      }
      resolve(userDetails)
    }, 500),
  )

// checks if a user has answered a question, returns optionNumber or else undefined
const hasUserAnswered = (question, authedUser) => {
  const { optionOne, optionTwo } = question
  if (optionOne.votes.includes(authedUser)) {
    return 'optionOne'
  } else if (optionTwo.votes.includes(authedUser)) {
    return 'optionTwo'
  }
}

// returns basic question info for all questions and stats if the user has answered the question / is author of a question
export const _getAllQuestions = authedUser =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) =>
    setTimeout(() => {
      // get all question id's
      const questionIds = Object.keys(questions)
      const answered = {},
        unAnswered = {},
        asked = {}

      for (const questionId of questionIds) {
        const currentQuestion = _.cloneDeep(questions[questionId], true)

        // checking if user has already answered this question
        const usersAnswer = hasUserAnswered(currentQuestion, authedUser)

        // checking if authedUser is the author of question
        const hasUserAsked = currentQuestion.author === authedUser

        // adding poll details
        if (hasUserAsked || usersAnswer) {
          currentQuestion.optionOne.votes =
            currentQuestion.optionOne.votes.length
          currentQuestion.optionTwo.votes =
            currentQuestion.optionTwo.votes.length
        }

        // removing poll details
        else {
          delete currentQuestion.optionOne.votes
          delete currentQuestion.optionTwo.votes
        }

        // putting question in the correct object
        if (hasUserAsked) {
          asked[questionId] = currentQuestion
        } else if (usersAnswer) {
          currentQuestion.answer = usersAnswer
          answered[questionId] = currentQuestion
        } else {
          unAnswered[questionId] = currentQuestion
        }
      }
      resolve({
        answered,
        unAnswered,
        asked,
      })
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
        [formattedQuestion.id]: _.cloneDeep(formattedQuestion),
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
      // a user can't answer his/her own poll, and can't answer an already answered question
      if (
        authedUser === questions[qid].author ||
        hasUserAnswered(questions[qid], authedUser)
      ) {
        reject()
      } else {
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

        // creating question data to be returned to be stored in redux store
        const questionData = _.cloneDeep(questions[qid])
        questionData.optionOne.votes = questionData.optionOne.votes.length
        questionData.optionTwo.votes = questionData.optionTwo.votes.length
        questionData.answer = answer

        resolve(questionData)
      }
    }, 500)
  })
}
