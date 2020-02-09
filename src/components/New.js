import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleAddNewQuestion } from '../actions/questions'

class New extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch, authedUser } = this.props

    this.setState({
      optionOne: '',
      optionTwo: '',
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
    const { optionOne, optionTwo } = this.state

    return (
      <form>
        <p>Would you rather</p>
        <input
          type='text'
          value={optionOne}
          name='optionOne'
          onChange={this.onChangeHandler}
        />
        <input
          type='text'
          value={optionTwo}
          name='optionTwo'
          onChange={this.onChangeHandler}
        />
        <button type='submit' onClick={this.handleFormSubmit}>
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
