import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'

import Grid from '../components/grid'

test('<Grid /> exists', t => {
  const expected = ''
  const actual = shallow(<Grid width={0} height={0} />).text()
  t.is(expected, actual)
})

test('Grid contains the correct number of cells', t => {
  const expected = 4
  const actual = shallow(<Grid width={2} height={2} />).children().length
  t.is(expected, actual)
})
