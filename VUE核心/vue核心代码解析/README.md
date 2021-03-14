<!--
 * @Author: your name
 * @Date: 2021-03-10 20:29:58
 * @LastEditTime: 2021-03-14 16:35:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\Vue-PARK\VUE核心\vue核心代码解析\README.md
-->


## vue核心代码

> 写在最前面: 阅读和理解源码主要是学习实现思路，以便在日后开发中能借鉴其开发模式、设计思想，当然也能更快定位错误。建议先结合 [Vue源码解析](https://vue-js.com/learn-vue/reactive/#_1-%E5%89%8D%E8%A8%80)组合看，下列文章只是在看的过程中偶有疑惑方便快速理解

> 数据侦测(响应式数据)
- [文章-响应式原理](https://blog.csdn.net/qq_30868289/article/details/106690837)

1. 将Data通过Observer类转换成响应式数据
2. 外界通过watcher类来获取数据时，触发getter将watcher添加到依赖中
3. 在数据发生变化时，触发setter， 向Dep中的依赖（watcher）发送通知
4. watcher在接收到通知后，向外界通知从而触发视图等一系列的更新


> Diff算法

> 当数据发生改变时，set方法会让调用Dep.notify通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图

> diff算法优化策略

1. 新前与旧前
2. 新后与旧后
3. 新后与旧前（此种情况发生，涉及移动节点，新前指向的节点，移动到旧后之后）
4. 新前与旧后（此种情况发生，涉及移动节点，新前指向的节点，移动到旧前之前）
（命中一种就不再进行命中判断并且指针后移，如果全部没命中就以循环来寻找）

```js
while(oldChildStart <= oldChildEnd && newChildStart <= newChildEnd) { 
  // 命中判断结束条件
  1. 如果旧节点先循环完毕，那么新节点就有要插入的节点（真实DOM）
  2. 如果新节点先循环完毕，那么老节点有剩余节点，他们是要被删除的节点（真实DOM）
  
}
```

[文章-详解vue的diff算法](https://www.cnblogs.com/wind-lanyan/p/9061684.html)

> 如何运转

* 虚拟dom是指用JS对象的方式来表示dom，dom上的一切属性都体现在js对象中 

* js数据劫持响应式改变的是 -> vdom
* vdom通过patch打补丁 -> 真实dom
* 真实dom通过events -> js

> 代码如何看

* `src/core/lifecycle.js`中可以找到调用patch的地方
* 方法lifecycleMixin
  * `_update`方法中`__patch__`方法就是打补丁的方法，打完补丁返回了真实dom`#$el`
* 方法mountComponent
  * 核心代码`vm._update(vm._render(), hydrating)`
  * `_render`函数可以在同级目录下`render.js`中找到
* patch函数在`src/platforms/web/runtime/index`中可以看到patch
  * `Vue.prototype.$mount`的上面能看到`Vue.prototype.__patch__ = inBrowser ? patch : noop`
  * 在同级目录下可以看到`patch.js`
  * `nodeOps`里都是真实节点dom操作
  * `modules`里对真实dom属性操作，如`attr`，`class`等
  * 然后就可以找到`core/vdom/patch`
* 在`core/vdom/patch`直接搜索`createPatchFunction`
 * 方法最后返回了`return function patch`这是我们真正打补丁的函数
 * 可以看到最后返回了真实dom`return vnode.elm`
 * 具体diff算法可以结合[文章-详解vue的diff算法](https://www.cnblogs.com/wind-lanyan/p/9061684.html)和源码一起看


> AST 模板解析
- [文章-源码解读文档](https://blog.csdn.net/qq_36259513/article/details/103794779)

> render函数
- [文章-render](https://www.zhihu.com/question/406354817)


### 其余源码理解

> new Vue()时执行了什么

1. 合并配置项
2. 初始化生命周期
3. 初始化事件中心
4. 初始化渲染
5. 创建钩子函数beforeCreate 
6. 初始化Inject
7. 初始化state (初始化data props watch methods mounted等) 可以获取数据
8. 初始化provider
9. 创建钩子函数create

### 其他
 - [vue技术解密](https://ustbhuangyi.github.io/vue-analysis/v2/reactive/getters.html#%E8%BF%87%E7%A8%8B%E5%88%86%E6%9E%90)
 - [vue官方源码解读](https://vue-js.com/learn-vue/virtualDOM/patch.html#_2-patch) 
 - [vue实例](https://cn.vuejs.org/v2/guide/instance.html) 
 - [vue API介绍](https://cn.vuejs.org/v2/guide/syntax.html) 

















