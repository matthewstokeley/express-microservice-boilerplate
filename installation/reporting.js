#! /usr/bin/node

/* 
 * Declare Modules
 *
 */

const config = require('./config')
const { spawn } = require('child_process')


spawn.stdout.on( '' )
spawn.on( 'close' , () => {} )

// ## Reporting
// # @link https://docs.google.com/spreadsheets/d/14mm2FRqMGerwqcX_pkKxXMzrMiPipDpy1_rnWjdhtCY/edit?usp=sharing
exec('npm install --save-dev allure')

if [  ]