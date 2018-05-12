import axios from 'axios'
axios.defaults.timeout = 3000
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

//添加请求拦截器
axios.interceptors.request.use(config => {
  //在发送请求之前做某事，比如说 设置loading动画显示
  return config
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(response => {
  //对响应数据做些事，比如说把loading动画关掉
  return response
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

export default {
  // 获取资源
  async get (url, params) {
    try {
      let res = await axios.get(url, {params: params})
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  },
  // 提交资源
  async post (url, params) {
    let res = await axios.post(url, params)
  },
  // 更新单个字段资源
  async put (url, params) {
    let res = await axios.put(url, params)
  },
  // 更新整体资源
  async patch (url, params) {
    let res = await axios.patch(url, params)
  },
  // 删除一个资源
  async delete (url, params) {
    let res = await axios.delete(url, params)
  },


}
