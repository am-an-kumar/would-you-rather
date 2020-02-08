import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '@babel/polyfill'
import './css/style.css'

import {
  _getAllUsers,
  _getAllQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA'

_getAllUsers().then(response => console.dir(response))
_getAllQuestions('sarahedo').then(response => console.dir(response))
_saveQuestionAnswer({
  authedUser: 'sarahedo',
  qid: '8xf0y6ziyjabvozdd253nd',
  answer: 'optionOne',
})
  .then(response => console.log(response))
  .catch(() => console.log('This shit works'))

_saveQuestionAnswer({
  authedUser: 'sarahedo',
  qid: '6ni6ok3ym7mf1p33lnez',
  answer: 'optionOne',
})
  .then(response => console.log(response))
  .catch(() => console.log('This shit works'))

_saveQuestion({
  optionOneText: 'be Batman',
  optionTwoText: 'be Joker',
  author: 'sarahedo',
}).then(response => console.log(response))

// react-axe will run only in dev mode
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // running the accessibility tests 1 second after the app is loaded
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<App />, document.getElementById('root'))
