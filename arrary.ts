/*
 * @Author: YK1669860124rKjQY 215683509@q
 * @Date: 2023-07-24 18:04:44
 * @LastEditors: YK1669860124rKjQY 215683509@q
 * @LastEditTime: 2023-12-05 15:51:45
 * @FilePath: /TS/arrary.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
// number[]  string[]   boolean[]
// Array<boolean>、

//普通类型数组
let arr: number[] = [11]

//对象数组 

// Fn 是关键字
interface e {
  name: string,
  age?: number
}
//
let arr1: e[] = [{ name: 'aa' }, { name: '2333', age: 1 }]

// 多维数组 

let arr2: number[][] = [[1]]
let arr3: Array<Array<number>> = [[2]]  //范型方式

//复杂数组 

let arr4: any[] = [1, '2', {}]
let arr5: [number, string] = [1, '2']
