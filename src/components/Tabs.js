import React from 'react'
import PropTypes from 'prop-types'

const Tabs = ({ selectedTab, handleTabChange }) => {
  const tabs = ['unAnswered', 'answered', 'asked']

  return (
    <div role='tablist' id='tabs'>
      {tabs.map(tab => (
        <button
          role='tab'
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={selectedTab === tab ? 'tab active-tab' : 'tab'}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  handleTabChange: PropTypes.func,
  selectedTab: PropTypes.string,
}

export default Tabs
