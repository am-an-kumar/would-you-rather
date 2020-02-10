import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddNewQuestion } from '../actions/questions'

class New extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    redirectToHome: false,
    hasError: false,
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch, authedUser } = this.props

    // control returns if either options are empty and warning message is displayed in UI
    if (!(optionOne.trim() && optionTwo.trim())) {
      this.setState({
        optionOne: optionOne.trim(),
        optionTwo: optionTwo.trim(),
        hasError: true,
      })
      return
    }

    // form is submitted and UI is reset
    // resetting form fields is not necessary as the user will be redirect to / eitherway, but added it for consistency
    this.setState({
      optionOne: '',
      optionTwo: '',
      redirectToHome: true,
    })
    dispatch(handleAddNewQuestion(optionOne, optionTwo, authedUser))
  }

  // change handler for 2 options
  onChangeHandler = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value,
      hasError: false,
    })
  }

  render() {
    const { optionOne, optionTwo, redirectToHome, hasError } = this.state

    // redirecting to home after form submission
    if (redirectToHome) {
      return <Redirect to='/' />
    }

    return (
      <form className='new-form'>
        <p>Would you rather</p>
        <input
          type='text'
          placeholder='Enter first option'
          value={optionOne}
          name='optionOne'
          onChange={this.onChangeHandler}
        />
        <input
          type='text'
          placeholder='Enter second option'
          value={optionTwo}
          name='optionTwo'
          onChange={this.onChangeHandler}
        />
        {hasError && (
          <span className='warning-message'>Options can&apos;t be empty</span>
        )}
        <button type='submit' onClick={this.handleFormSubmit} className='btn'>
          Submit
        </button>
      </form>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

New.propTypes = {
  authedUser: PropTypes.string,
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(New)
