import { ZhLocal } from "./config"
import moment from "moment"
moment.locale("zh-cn", ZhLocal)
export const getTimeFromNow = (date: Date) => {
    return moment(date).fromNow()
}

export const formatDate = (date: Date) => {
    return moment(date).format("YYYY-MM-D HH:mm:ss")
}