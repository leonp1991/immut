import test from 'ava'

import immut from '../../source/immut'

test('exports: from is included', t => {
  t.true(immut.from instanceof Function)
})

test('exports: size is included', t => {
  t.true(immut.size instanceof Function)
})

test('exports: data is included', t => {
  t.true(immut.data instanceof Function)
})

test('exports: apply is included', t => {
  t.true(immut.apply instanceof Function)
})

test('exports: get is included', t => {
  t.true(immut.get instanceof Function)
})
