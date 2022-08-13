// import { AnyRecord } from "dns";

// /**
//  * 1.基础类型
//  */
// let str: string = '123';

// let muban: string = `hello ${str}`;

// console.log(muban);

// let num: number = NaN;
// let num2: number = Infinity;
// console.log(num2);

// let b: boolean = true;

// let u: void = undefined;

// let fun = (): void => {

// }

// /**
//  * 2.接口和对象类型
//  */
// interface Person {
//     // 必选属性
//     readonly name: string,
//     // 可选属性
//     age?: number,
//     // 任意属性，注意：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
//     [propName: string]: any
// }

// let a: Person = {
//     name: 'csz',
//     age: 23,
//     school: 'hust'
// }

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let { title: t, width: w, height: h } = options
// console.log(t, w, h);

// function arr(...args: any): void {
//     console.log(args);
//     console.log(typeof args);
//     let nums: number[] = args;
//     console.log(nums.fill(0));


// }

// arr(1, 2, 3)

// interface IArray {
//     [index: number]: number;
// }

// let myArr: IArray = [1, 2, 3];


// let func = (arg: number | string): boolean => {
//     return !!arg;
// }

// console.log(func(' '));


// abstract class A {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     abstract getName(): string;
// }

// class B extends A {
//     constructor(name: string) {
//         super(name);
//     }

//     getName(): string {
//         return this.name;
//     }
// }

// let b: B = new B('蔡松志');
// console.log(b.getName());

// const enum Color2 {
//     red,
//     green,
//     blue
// }


// 反向映射，工作中会用到！
enum Cost {
    low = 1,
    middle = 2,
    high = 3
}

let value: string = '3';
console.log(Cost.high);
console.log(typeof Cost[Number(value)], Cost[Number(value)]);

let str = 'csz';

// function error(msg: string): never {
//     throw new Error(msg);
// }

// error('123');
let s: symbol = Symbol('id');
console.log(s);

let obj = {
    name: 'csz',
    [s]: 213
}
console.log(typeof Symbol.iterator);

function add<T, U>(a: T, b: U): Array<T | U> {
    let arr: Array<T | U> = [a, b];
    return arr;
}

console.log(add({ name: 'csz' }, '2'));


