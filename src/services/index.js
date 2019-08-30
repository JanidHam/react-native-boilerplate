import axios from 'axios'

import config from '@root/config'

const request = axios.create({
  baseURL: config.api.host,
  timeout: config.api.timeout,
})

export default request
