#!/usr/bin/env node

import fs from "fs";
import question from "./question/index.js";
import createHtmlTemplate from './createHtmlTemplate.js';
import createIndexTemplate from './createIndexTemplate.js';
import createPackageTemplate from './createPackageTemplate.js';
import createWebpackTemplate from './createWebpackTemplate.js';
import createBabelrcTemplate from "./createBabelrcTemplate.js";
import createConfig from './config.js';
import { execa } from 'execa';
import chalk from "chalk";


const answer = await question();

const config = createConfig(answer);
// console.log(config);

//1. 创建文件夹
console.log(chalk.blue(`创建文件夹 -> react-test`));
fs.mkdirSync(getRootPath());

//2. 创建public文件夹
console.log(chalk.blue(`创建文件夹 -> public`));
fs.mkdirSync(`${getRootPath()}/public`);

//3. 创建index.html
console.log(chalk.blue(`创建html文件 -> index.html`));
fs.writeFileSync(`${getRootPath()}/public/index.html`, createHtmlTemplate());

//4. 创建src文件夹
console.log(chalk.blue(`创建文件夹 -> src`));
fs.mkdirSync(`${getRootPath()}/src`);

//5. 创建index.js
console.log(chalk.blue(`创建文件 -> index.js`));
fs.writeFileSync(`${getRootPath()}/src/index.js`, createIndexTemplate(config));

//6. 创建package.json
console.log(chalk.blue(`创建文件 -> package.json`));
fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(config));

//7. 创建webpack.config.js
console.log(chalk.blue(`创建文件 -> webpack.config.js`));
fs.writeFileSync(`${getRootPath()}/webpack.config.js`, createWebpackTemplate(config));

//8. 创建.babelrc
console.log(chalk.blue(`创建文件 -> .babelrc`));
fs.writeFileSync(`${getRootPath()}/.babelrc`, createBabelrcTemplate());

//8. 安装依赖
//TODO
console.log(chalk.blue(`安装依赖`));
execa('npm install', {
    cwd: getRootPath(),
    stdio: [2, 2, 2]
})


function getRootPath(){
    return './react-test';
}