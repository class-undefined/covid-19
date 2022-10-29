import { service } from "@/utils/api/service/service"
import { Response } from "@/utils/api/response/type"
export const getGlobalMap = () => {
    return service({
        url: "/global_map",
        method: "GET",
    }) as unknown as Promise<Response>
}

export const getBroadcast = () => {
    return service({
        url: "/broadcast",
        method: "GET",
    }) as unknown as Promise<Response>
}

export const getConfirmLine = () => {
    return service({
        url: "/confirm_line",
        method: "GET",
    }) as unknown as Promise<Response>
}

export const getCountryLine = (name: string) => {
    return service({
        url: "/country_line",
        method: "GET",
        params: { name },
    }) as unknown as Promise<Response>
}

export const getCityLine = (code: string) => {
    return service({
        url: "/city_line",
        method: "GET",
        params: { code },
    }) as unknown as Promise<Response>
}
export const getChinaConfirm = () => {
    return service({
        url: "/china_confirm",
        method: "GET",
    }) as unknown as Promise<Response>
}
