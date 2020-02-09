import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleReceiveAllQuestions } from '../actions/questions'
import Tabs from './Tabs'
import Answered from './Answered'
import UnAnswered from './UnAnswered'
import Asked from './Asked'

class Home extends Component {
  state = {
    selectedTab: 'answered',
  }

  // will handle change between tabs
  handleTabChange = selectedTab => {
    this.setState({
      selectedTab,
    })
  }

  componentDidMount() {
    const { dispatch, authedUser } = this.props
    dispatch(handleReceiveAllQuestions(authedUser))
  }

  render() {
    const { selectedTab } = this.state
    const { answered, unAnswered, asked } = this.props

    return (
      <>
        <Tabs
          handleTabChange={this.handleTabChange}
          selectedTab={selectedTab}
        />
        {selectedTab === 'answered' ? (
          <Answered questions={answered} />
        ) : selectedTab === 'unAnswered' ? (
          <UnAnswered questions={unAnswered} />
        ) : (
          <Asked questions={asked} />
        )}
      </>
    )
  }
}

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  answered: { ...questions.answered },
  unAnswered: { ...questions.unAnswered },
  asked: { ...questions.asked },
})

Home.propTypes = {
  dispatch: PropTypes.func,
  authedUser: PropTypes.string,
  answered: PropTypes.object,
  unAnswered: PropTypes.object,
  asked: PropTypes.object,
}

export default connect(mapStateToProps)(Home)
