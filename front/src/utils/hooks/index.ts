import { Ref, ref } from "vue"
export type UseLoading = {
    begin: () => void,
    end: () => void,
    value: Ref<boolean>
}

/** 方便管理loading状态 */
export const useLoading = (): UseLoading => {
    const value = ref(false)
    const begin = () => {
        value.value = true
    }
    const end = () => {
        value.value = false
    }
    return { begin, end, value }
}

/**
 * 防抖
 * @param callback 执行函数
 * @param delay 延迟时间
 * @returns 
 */
export const useDebounce = (callback: any, delay: number): any => {
    let timeout: NodeJS.Timeout | null = null
    return function () {
        if (timeout) clearTimeout(timeout) // 如果持续触发，那么就清除定时器，定时器的回调就不会执行。
        timeout = setTimeout(() => {
            callback(...arguments)
        }, delay)
    }
}

/**
 * 节流
 * @param callback 执行函数
 * @param delay 延迟时间
 * @returns 
 */
export const useThrottle = (fn: any, delay: number) => {
    let timeout: NodeJS.Timeout | null = null
    return (...params: any[]) => {
        if (!timeout) {
            timeout = setTimeout(() => {
                fn(...params);
                timeout = null;
            }, delay);
        }
    };
}

export const useWindowSize = () => {
    const width = ref(window.innerWidth)
    const height = ref(window.innerHeight)
    window.onreset = (evt) => {
        width.value = window.innerWidth
        height.value = window.innerHeight
    }
    return { width, height }
}