// #!/usr/bin/env node
//
// 'use strict';
//
// const program = require('commander');
//
// program
//     .version('0.0.1')
//     .usage('例子')
//     .description('this is a lizi of commander')
//
// program
//     .command('hello [st]')
//     .action(function(st,value){
//         hello(st,value);
//     })
//
// function hello(val,o){
//     console.log(val);
//     console.log(1);
//     // console.log(o)
// }
//
// program
//     .option('-f --flag [value]','保存','ha')
//     .option('-t --tale [value]','保存')
//
// program.command('nihao','hello');
//
// program.parse(process.argv);
//
// if (program.flag){
//     global.flag = program.flag;
// }
//
// console.log(global.flag);
//
//
//
//
//



var program = require('commander');

function range(val) {
    return val.split('..').map(Number);
}

function list(val) {
    return val.split(',');
}

program
    .version('0.0.1')
    .usage('test')


program
    .command('deploy <name>')
    .description('部署一个服务节点')
    .action(function(name){
        console.log('Deploying "%s"', name);
    });

program
    .command('sass <name>')
    .option('--w', '监听sass变化，自动执行编译')
    .alias('sa')
    .action(function (name) {
         console.log(name)
    });

//执行命令
program
    .command('init','初始化')
    .alias('i');
//交互命令
program
    .command('new <name>')
    .description('生成一个模板页面,options: -n --num 设置初始值,默认为0' )
    .option('-n --num <num>','初始值',0)
    .action(function(name,option){
        console.log("页面名称:%s,初始值:%s",name,option.num);
        console.log(program);
    });

console.log(process);
program.parse(process.argv);

