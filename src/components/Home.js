import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleReceiveAllQuestions } from '../actions/questions'

class Home extends Component {
  componentDidMount() {
    const { dispatch, authedUser } = this.props
    dispatch(handleReceiveAllQuestions(authedUser))
  }

  render() {
    return <p>Home!!!</p>
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

Home.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
}

export default connect(mapStateToProps)(Home)
