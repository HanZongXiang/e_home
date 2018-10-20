import axios from 'axios'

const instance = axios.create({
  baseURL:'http://211.67.177.56:8080/hhdj',
  timeout:15000
})

const qs = require('querystring')
instance.interceptors.request.use(function (config) {
  if (config.method == 'post') {
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  // console.log(config)
  return config
}, function (error) {
  return Promise.reject(error)
})

const xhr = {
  get(url,data,config) {
    return new Promise((resolve,reject) => {
      const token = localStorage.getItem('token')
      // console.log(token)
      let computedConfig = {
        ...config
      }
      if (token) {
        computedConfig = {
          headers: {
            'token':token
          }
        }
      }
      // console.log(computedConfig)
      instance.get(url, { params: data, ...computedConfig }, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('token')
      // console.log(token)
      let computedConfig = {
        ...config
      }
      if (token) {
        computedConfig = {
          headers: {
            'token': token
          }
        }
      }
      instance.post(url, data, computedConfig).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export const $axios = xhr