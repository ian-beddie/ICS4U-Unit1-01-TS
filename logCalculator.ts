/**
 * The program shows how to get input and deal with numbers.
 *
 * By: Ian Beddie
 * Version: 1.0
 * Since:   2024-09-22
 *
 */

import { createPrompt } from 'bun-promptx'

const logLengthString = createPrompt(
  'Select the length of your logs: 0.25m, 0.5m, 1m: ')

const logLength = parseFloat(logLengthString.value)

const logNumber = 1100 / (20 * logLength)

console.log(
  `The truck can carry ${logNumber} logs that are ${logLength}m long.`)

console.log('\nDone.')
