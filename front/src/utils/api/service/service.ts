/**
 * @author: 野漫横江
 */
import axios from "axios"
import { StatusCode } from "../response/type"
import { ElNotification } from "element-plus"
import { requestConfig } from "@/request.config"
// create an axios instance
const service = axios.create({
    baseURL: requestConfig.baseUrl, // url = base url + request url
    // withCredentials: true, // 当异步请求时发送cookies
    timeout: 300000, // request timeout
})

service.interceptors.request.use(
    config => {
        // todo
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data // 请求的data数据，由于封装了Result层，数据类型为Response
        const { code } = res
        // if the custom code is not 20000, it is judged as an error.
        if (code !== StatusCode.SUCCESS) {
            console.error(res) // 出错后用于debug
            ElNotification.error({
                message: res.message,
                title: "Error",
            })
            if (code === StatusCode.INVALID) {
                location.replace(`/login?back=${location.pathname}`)
            }
            return Promise.reject(new Error(res.message || "Error"))
        } else {
            return res
        }
    },
    error => {
        let message = "糟糕, 与服务器失去联系了!"
        if (error?.response?.data?.message) message = error?.response?.data?.message
        ElNotification.error({
            message,
            title: "Error",
        }) // 之后若开发MessageBox则调用MessageBox
        if (error?.response?.data?.code === StatusCode.INVALID) {
            location.replace(`/login?back=${location.pathname}`)
        }
        console.error(error, error.type) // 出错后用于debug
        return Promise.reject(error)
    }
)

export { service }
