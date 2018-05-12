/**
 * 存储localStorage
 */
export default {
  set (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },
  get (name) {
    if (!name) return
    return window.localStorage.getItem(name)
  },
  remove (name) {
    if (!name) return
    window.localStorage.removeItem(name)
  }
}
