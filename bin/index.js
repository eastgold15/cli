#!/usr/bin/env node


const { program } = require('commander')
// console.log(process.args)
const chalk = require('chalk');
console.log(chalk.green('hello world'))
console.log(chalk.cyan ('hello world'))
console.log(chalk.bgGreen('---- Hello Chalk 12----'));
console.log(chalk.blue('---- Hello Chalk ----'));
console.log(chalk.bold.blueBright.underline('---- Hello Chalk ----\n'));
console.log(chalk.blueBright.bold.underline('---- Hello Chalk ----\n'));





program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza');

    const options = program.opts();
    console.log(options);

program
    .command('clone <source> [desttination]' )
    .description('clone a repository into a newly created directory')
    .action((source,destination)=>{
        console.log(source,destination)
    })


    program
    .version('0.0.1')
    .name(chalk`{bgGreen.bold vue脚手架} `)
    .usage(chalk`{yellow.bold  <command>}`  + "\t"+   chalk`{cyan [options]}`)
    .parse(process.argv);


    const inquirer = require('inqurer')
    inquirer
        .prompt([

        ])
        .then((answaers)=>{
            console.log(answers)
        })
        .catch((error)=>{
            if(error.isTtyError){
                console.log('prompt could not be rendered in the current environment')
            }else{
                console.log('some other error')
            }
        })
