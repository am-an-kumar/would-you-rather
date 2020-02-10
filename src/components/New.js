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
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch, authedUser } = this.props

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
    })
  }

  render() {
    const { optionOne, optionTwo, redirectToHome } = this.state

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
