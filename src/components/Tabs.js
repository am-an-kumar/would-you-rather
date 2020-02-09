import React from 'react'
import PropTypes from 'prop-types'

const Tabs = ({ selectedTab, handleTabChange }) => {
  const tabs = ['answered', 'unAnswered', 'asked']

  return (
    <div role='tablist'>
      {tabs.map(tab => (
        <button
          role='tab'
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={selectedTab === tab ? 'active-tab' : ''}
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
