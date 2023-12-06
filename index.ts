import { log } from "console"

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
let str: string = 'hello word'

let a: number = 0.1
let b: number = 0.2
// console.log(a + b);


let v1: void = null
let v2: undefined = undefined

function add(): void {
  // return 'ss'
}

console.log(str);

// 类型------------
// any 任意类型   unknow (只能赋值给自身和any,不能读任何属性,方法也不能调用,比any安全一点)
// object(引用类型 function  {}  [])  Object (包含所有的类型的object)
// Number String Boolean 
// number string boolean
// 1 hahah {}(支持所有类型,无法对变量修改操作)
// never


//interface 
// 接口继承 
// 定义函数类型 
//readonly
// hobby?: Object, 
// extends 继承

interface info extends infos {   //接口继承
  sex: string,
  readonly age: number,  // 只读属性
  hobby?: Object,   //可选
  [a: string]: any  //任意属性
}


interface infos {
  like: number
}


let zp: info = {
  sex: 'nan',
  age: 12,
  like: 1,
  hobby: {},
  b: 1
}

// 定义函数类型 
interface Fn {
  (name: string): string[]
}

const he: Fn = function (name: string) {
  return ['1']
}

//  联合类型 a|b 既可以是a也可以是b   c&d  既包括a也包括d（类似于 extends）  
let a_1 :number | string =12323

interface c_1 {
  name:string,
  age:number
}
interface d_1 {
  sex:string
}

const  getUserInfo = (info :c_1&d_1):void=>{
console.log( info);
}
getUserInfo({name:'1',age:1,sex:'man'})
// 类型断言  交叉类