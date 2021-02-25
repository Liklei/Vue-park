/*
 * @Author: your name
 * @Date: 2021-02-25 20:10:10
 * @LastEditTime: 2021-02-25 20:19:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-PARK\VUE核心\vue核心代码解析\obect-reactive.js
 */
let cat = {}
let val = 000
Object.defineProperty(cat, "cart", {
    configurable: true,
    enumerable: true,
    get() {
        console.log("获取值")
        return val
    },
    set(newval){
        val = newval
        console.log("设置值")
    }
})

