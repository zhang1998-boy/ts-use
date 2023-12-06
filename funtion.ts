/*
 * @Author: YK1669860124rKjQY 215683509@q
 * @Date: 2023-08-01 17:21:55
 * @LastEditors: YK1669860124rKjQY 215683509@q
 * @LastEditTime: 2023-12-05 16:25:02
 * @FilePath: /TS/funtion.ts
 * @Description: 函数的扩展
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

// 函数定义类型合返回值 、 箭头函数定义类型和返回值
// 函数默认参数  函数可选参数   (两者不能同时存在)
let fun9 = function (a: number = 10): number {
  return a
}
let fun9_1 = function (a?: number): number {
  return a
}

let fun1 = function (a: number): number {
  return a
}

// 函数参数默认是一个对象 
interface obj {
  name: string,
  age: number,
  add?: (this: obj, num: number) => void
}

let fun5 = function (a: obj): object {
  this.name = 'xiao'
  return a
}
fun5({ name: 'yixin', age: 1 })

// 函数的this类型 ,函数的额第一个参数定义this的类型
let obj1: obj = {
  name: '1',
  age: 2,
  add(this: obj, num: number) {
    this.age = num
  }
}
obj1.add(2)
// 函数重载 (根据参数的不同来调用方法的不同功能)