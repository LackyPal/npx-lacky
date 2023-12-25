'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white.bold('                       Lacky Pal'),
  work: chalk.white('Noob Dev'),
  kofi: chalk.gray('https://ko-fi.com/') + chalk.yellow('lackypal'),
  discord: chalk.gray('https://discord.com/users/') + chalk.cyanBright('668157292927254587'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~lackypal'),
  github: chalk.gray('https://github.com/') + chalk.green('lackypal'),
  blog: chalk.magenta('https://lackypal.hashnode.dev'),
  web: chalk.cyan('https://lacky.is-a.dev'),
  npx: chalk.red('npx') + ' ' + chalk.white('lacky'),
  labelWork: chalk.white.bold('    Work:'),
  labelKofi: chalk.white.bold('   Ko-fi:'),
  labelDiscord: chalk.white.bold(' Discord:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelBlog: chalk.white.bold('    Blog:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const kofing = `${data.labelKofi}  ${data.kofi}`
const discording = `${data.labelDiscord}  ${data.discord}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const bloging = `${data.labelBlog}  ${data.blog}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + 
               newline + newline + 
               working + newline + 
               kofing + newline + 
               discording + newline + 
               npming + newline + 
               githubing + newline + 
               bloging + newline + 
               webing + newline + newline + 
               carding 

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
