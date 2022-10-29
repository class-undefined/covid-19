export type ResizeEventHandle = (dom: HTMLElement, domRect: DOMRectReadOnly) => void

export const useResizeEvent = (dom: HTMLElement) => {
    return (cb: ResizeEventHandle) => {
        const ro = new ResizeObserver(entries => {
            for (let entry of entries) {
                const cr = entry.contentRect
                cb(dom, cr)
            }
        })
        ro.observe(dom)
    }
}