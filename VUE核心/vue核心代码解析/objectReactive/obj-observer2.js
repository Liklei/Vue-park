/*
 * @Author: your name
 * @Date: 2021-02-25 20:32:09
 * @LastEditTime: 2021-02-25 22:04:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-PARK\VUE核心\vue核心代码解析\objectReactive\obj-observer2.js
 */
class CAR{
    constructor() {
        this.name ="aaa"
    }
}
let car = new CAR()
console.log(car.name)

try{
    console.log("aaa")
}catch(e) {
    console.log(e)
}finally{
    console.log('finally')
}