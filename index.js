#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()
program.version('0.0.1', '-v, --vers', 'output the current version');

program
  .option('-f, --framework <framework>', 'Framework')
  .option('-l, --language <language>', 'Language')
  .option('-b, --bundler <bundler>', 'Bundler')
  .option('-s, --state-container <state>', 'State Container')

program.parse(process.argv)

const options = program.opts();
console.log(options)