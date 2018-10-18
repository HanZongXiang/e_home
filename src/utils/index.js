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
  return config
}, function (error) {
  return Promise.reject(error)
})

const xhr = {
  get(url,data,config) {
    return new Promise((resolve,reject) => {
      instance.get(url, { params: data }, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.post(url, data , config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export const $axios = xhr