import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleMarkQuestionAnswered } from '../../actions/questions'

class PollForm extends Component {
  state = {
    answer: 'optionOne',
  }

  handleChange = option => {
    this.setState({
      answer: option,
    })
  }

  handlePollSubmission = event => {
    const { authedUser, id, dispatch } = this.props
    const { answer } = this.state
    event.preventDefault()

    dispatch(handleMarkQuestionAnswered(authedUser, id, answer))
  }

  render() {
    const { optionOneText, optionTwoText } = this.props
    const { answer } = this.state
    return (
      <form>
        <div>
          <label htmlFor='option1'>
            <input
              type='radio'
              name='option'
              id='option1'
              value={optionOneText}
              checked={answer === 'optionOne'}
              onClick={() => this.handleChange('optionOne')}
              onChange={() => this.handleChange('optionOne')}
            />
            {optionOneText}{' '}
          </label>
        </div>

        <div>
          <label htmlFor='option2'>
            <input
              type='radio'
              name='option'
              id='option2'
              value={optionTwoText}
              checked={answer === 'optionTwo'}
              onClick={() => this.handleChange('optionTwo')}
              onChange={() => this.handleChange('optionTwo')}
            />
            {optionTwoText}
          </label>
        </div>
        <button type='submit' onClick={this.handlePollSubmission}>
          Submit
        </button>
      </form>
    )
  }
}

PollForm.propTypes = {
  optionOneText: PropTypes.string,
  optionTwoText: PropTypes.string,
  id: PropTypes.string,
  authedUser: PropTypes.string,
  dispatch: PropTypes.func,
}

export default connect()(PollForm)
