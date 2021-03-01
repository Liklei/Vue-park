/*
 * @Author: your name
 * @Date: 2021-02-25 20:32:09
 * @LastEditTime: 2021-02-27 20:44:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-PARK\VUE核心\vue核心代码解析\objectReactive\obj-observer2.js
 */
class Observer {
    constructor(obj) {
        // 判断元数据是不是对象
       if(isArray(obj)) {
           //
       }else{
           this.walk()
       }
    }
    walk() {
        //遍历对象，将数据通过defineReactive转换为响应式数据
    }
}

function defineReactive(obj, key) {
    let dep = new Dep()
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get() {
            dep.add()
        },
        set(){
            dep.notify()
        }
    })
}