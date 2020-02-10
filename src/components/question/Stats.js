import React from 'react'
import PropTypes from 'prop-types'
import { findRatio } from '../../utils/helpers'

const Stats = ({ favor, against }) => (
  <span className='option-stats'>
    <span className='stats-container'>
      <span
        style={{
          width: `${findRatio(favor, against)}%`,
        }}
        className='figure'
      ></span>
    </span>
    <span className='text'>{`${favor} out of ${favor + against} votes`}</span>
  </span>
)

Stats.propTypes = {
  favor: PropTypes.number,
  against: PropTypes.number,
}

export default Stats
