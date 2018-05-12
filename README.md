
##工具包

* Storage
```javascript
set (name, content)
get (name)
remove (name)
```

* http
```javascript
get(url, params)
post(url, params)
put(url, params)
delete(url, params)
patch(url, params)
```
* router

```javascript
add ('路由名称', '路由地址', '使用组件', '子路由')

function middleware () {
  if (false){
    throw new Error('错误') // 结束当前程序
  }
}

middleware (() => {}, middleware, ...) //中间件
utils.add('T1', '/user', 'user', (router) => {
  router.add('T002', '/user', 'user', (router) => {
    router.add('我是中午', '/user', 'user')
    router.add('T0023', '/user', 'user')
    router.add('T0024', '/user', 'user')
    router.add('T0025', '/user', 'user')
  })
  router.add('T006', '/user', 'user').middleware(() => {})
  router.add('T004', '/user', 'user')
}).middleware(() => {})

utils.add('T2', '/user', 'user')
utils.add('T3', '/user', 'user')
utils.add('T4', '/user', 'user')
utils.add('T5', '/user', 'user')
utils.add('T6', '/user', 'user')
```
