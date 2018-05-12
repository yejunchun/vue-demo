/**
 * 设置路由
 */

class Extend { // 路由扩展 支持中间件设置
  constructor (router) {
    this.router = router
  }
  middleware (...middleware) {
    // 这个中间件，往下走才能看到显示的组件
    if (middleware) {
      this.router.beforeEnter = (to, from, next) => {
        try { // try中间件 是否异常
          for (var m in middleware) {
            middleware[m]()
          }
          next() // 这个中间件，往下走才能看到显示的组件
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}

class Router {
  child = false
  router = []
  group = []
  middleware = [] // 中间件
  /* use (...middleware) {
    this.middleware = middleware
  } */

  /**
   * 添加路由
   * @param name 路由名称
   * @param path 路由地址
   * @param component 路由使用的组件
   * @return {}
   */
  add (name, path, component, children) {
     this.router = {
      path: path,
      name: name,
      component: component
    }
    if (typeof(children) === 'function') {
      var newrouter = new Router()
      newrouter.child = true // 子级路由
      children(newrouter)
      this.router.children = newrouter.group
    }
    this.group.push(this.router)
    return new Extend(this.router)

  }

}

export default new Router()
