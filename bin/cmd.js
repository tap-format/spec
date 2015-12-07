#!/usr/bin/env node

var parser = require('@untap/parser')
var formatAsSpec = require('../')

var input$ = parser.observeStream(process.stdin)

formatAsSpec(input$).forEach(console.log.bind(console))

