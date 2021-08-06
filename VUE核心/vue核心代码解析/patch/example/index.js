/*
 * @Author: your name
 * @Date: 2021-07-04 21:36:26
 * @LastEditTime: 2021-07-24 13:47:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue-PARK\VUE核心\vue核心代码解析\patch\example\index.js
 */

function example() {
    let vnode = null
    // 调用h函数
    h('a', {props: {href: 'www.cc.com'}}, 'cc')
    // 得到的虚拟节点
    vnode = {'sel': 'a', "data": {props: {href: 'www.cc.com'} }, "text": "cc"}
    // 表示的真正节点
    return `<a href="www.cc.com">cc</a>`
}

function exampleH() {
   h('ul', {}, [
    h('li', {}, 'cc1'),
    h('li', {}, 'cc2'),
    h('li', {}, 'cc3')
   ])
   let vnodes = {
       "sel": 'ul', 
       "data": {}, 
       "children": [
           {"sel": 'li', "text": "cc1"},
           {"sel": 'li', "text": "cc2"},
           {"sel": 'li', "text": "cc3"}
       ]
    }
}

function exampleProps() {
    return {
        children: undefined, // 子元素
        data: {}, // 属性样式等等
        elm: undefined, // 对应真正的dom节点，undefined还未上树
        key: undefined, //标识，服务于节点更新
        sel: "div",
        text: "cc web"
    }
}






