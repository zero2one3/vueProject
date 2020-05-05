import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000',            //上传github时将baseURL清空，需要接口的添加微信coderwhy2
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  },error => {
    console.log(error)
  })
  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error)
  })

  return instance(config)
}
