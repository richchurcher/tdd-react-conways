import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'

import App from '../components/app'
import Grid from '../components/grid'

test('Scaffold', t => {
  t.pass()
})

test('<App /> exists', t => {
  const expected = '<grid />'
  const actual = shallow(<App />).text()
  t.is(actual, expected)
})

test('<Grid /> exists', t => {
  const expected = ''
  const actual = shallow(<Grid />).text()
  t.is(actual, expected)
})
