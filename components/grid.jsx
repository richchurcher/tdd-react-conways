import React from 'react'
import {range} from 'lodash'

import Cell from './cell'

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  render () {
    const cells = range(this.props.width * this.props.height)
      .map((n) => {
        return <Cell key={n} />
      })

    return (
      <main>{cells}</main>
    )
  }
})
