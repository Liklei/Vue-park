
## vue核心代码

> 数据侦测(响应式数据)
- [文章-响应式原理](https://blog.csdn.net/qq_30868289/article/details/106690837)


> Diff 算法
[文章-详解vue的diff算法](https://www.cnblogs.com/wind-lanyan/p/9061684.html)


> AST 模板解析
- [文章-源码解读文档](https://blog.csdn.net/qq_36259513/article/details/103794779)

> render函数
- [文章-render](https://www.zhihu.com/question/406354817)


### 其他
 - [vue技术解密](https://ustbhuangyi.github.io/vue-analysis/v2/reactive/getters.html#%E8%BF%87%E7%A8%8B%E5%88%86%E6%9E%90)
 - [vue官方源码解读](https://vue-js.com/learn-vue/virtualDOM/patch.html#_2-patch) 
 - [vue实例](https://cn.vuejs.org/v2/guide/instance.html) 
 - [vue API介绍](https://cn.vuejs.org/v2/guide/syntax.html) 


 ## 如何运转

* js数据劫持响应式改变的是 -> vdom
* vdom通过patch打补丁 -> 真实dom
* 真实dom通过events -> js

### 代码如何看

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









