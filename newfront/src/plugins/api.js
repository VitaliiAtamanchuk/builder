import axios from 'axios'

// const baseURL = 'http://localhost:8000/'
const baseURL = '/api/'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const axiosInstance = axios.create({
  baseURL,
  // TODO: Stash https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/withCredentials
  // withCredentials: true
})

axiosInstance.interceptors.response.use(
  null,
  err => {
    return new Promise(function (resolve, reject) {
      if (process.env.NODE_ENV === 'development') {
        console.log(err)
        console.log(err.response)
        console.log(err.message)
      }

      if (err.response && err.response.status === 401) {
      }

      throw err
    })
  }
)

export default {
  install (Vue, opts) {
    Vue.prototype.$projects = () => {
      return axiosInstance.get('/project/list')
    }
    Vue.prototype.$createProject = (name) => {
      return axiosInstance.post('/project/create', {name})
    }
    Vue.prototype.$deleteProject = (id) => {
      return axiosInstance.delete(`/project/${id}/delete`)
    }
    Vue.prototype.$getProject = (id) => {
      return axiosInstance.get(`/project/${id}/get`)
    }
    Vue.prototype.$renameProject = (id, name) => {
      return axiosInstance.put(`/project/${id}/rename`, {name})
    }
    Vue.prototype.$downloadProject = (id) => {
      return axiosInstance.get(`/project/${id}/download`)
    }
    Vue.prototype.$updateProject = (id, data) => {
      return axiosInstance.put(`/project/${id}/update`, {data})
    }
  }
}
