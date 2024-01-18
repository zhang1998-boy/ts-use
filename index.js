"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: YK1669860124rKjQY 215683509@q
 * @Date: 2023-07-24 17:22:35
 * @LastEditors: your name
 * @LastEditTime: 2023-12-06 21:51:21
 * @FilePath: \ts-use\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
let str = 'hello word';
let a = 0.1;
let b = 0.2;
// console.log(a + b);
let v1 = null;
let v2 = undefined;
function add() {
    // return 'ss'
}
console.log(str);
let zp = {
    sex: 'nan',
    age: 12,
    like: 1,
    hobby: {},
    b: 1
};
const he = function (name) {
    return ['1'];
};
//  联合类型 a|b 既可以是a也可以是b   c&d  既包括a也包括d（类似于 extends）  
let a_1 = 12323;
const getUserInfo = (info) => {
    console.log(info);
};
getUserInfo({ name: '1', age: 1, sex: 'man' });
// 类型断言  交叉类
