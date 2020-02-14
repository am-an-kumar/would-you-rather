import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tabs from './Tabs'
import Questions from './question/Questions'

class Home extends Component {
  state = {
    selectedTab: 'unAnswered',
  }

  // will handle change between tabs
  handleTabChange = selectedTab => {
    this.setState({
      selectedTab,
    })
  }

  // renders the 3 tabs, answered, unanswered and asked, and the questions of the tab that is currently selected
  render() {
    const { selectedTab } = this.state
    const { answered, unAnswered, asked } = this.props

    return (
      <>
        <Tabs
          handleTabChange={this.handleTabChange}
          selectedTab={selectedTab}
        />
        <Questions
          questions={
            selectedTab === 'answered'
              ? answered
              : selectedTab == 'unAnswered'
              ? unAnswered
              : asked
          }
        />
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
