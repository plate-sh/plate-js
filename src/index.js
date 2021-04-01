const path = require('path')
const { Command } = require('commander')
const inquirer = require("inquirer")
const shell = require('shelljs')
const chalk = require("chalk")

module.exports = () => {
  const program = new Command()

  program.version(require('../package').version, '-v, --vers', 'output the current version')
  program.option('-d, --directory <directory>', 'setup directory').parse(process.argv)

  const options = program.opts()
  const setupPath = options?.directory && path.resolve(process.cwd(), options.directory) || process.cwd()
  
  // shell.exec('ls -al')

  const handleLanguage = async () => {
    const result = await inquirer.prompt({
      type: "list",
      name: "language",
      message: "Select Language.",
      choices: [
        { name: "TypeScript", value: 1 },
        { name: "JavaScript", value: 2 }
      ]
    });
    console.log(result)
  };

  const handleFramework = async () => {
    const result = await inquirer.prompt({
      type: "list",
      name: "framework",
      message: "Select Framework.",
      choices: [
        { name: "React", value: 1 },
        { name: "Vue", value: 2 }
      ]
    });
    console.log(result)
  }
  
  const handleBundler = async () => {
    const result = await inquirer.prompt({
      type: "list",
      name: "Bundler",
      message: "Select Bundler.",
      choices: [
        { name: "Webpack", value: 1 },
        { name: "Rollup", value: 2 }
      ]
    });
    console.log(result)
  }

  (async () => {
    await handleLanguage()
    await handleFramework()
    await handleBundler()
  })()
}