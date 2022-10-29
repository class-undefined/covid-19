import { createApp } from "vue"
import "./global.scss"
import App from "./App.vue"
import ElementPlus from "element-plus"
import { useDark, useToggle } from "@vueuse/core"
const isToggle = useToggle(useDark())
isToggle(true)
createApp(App).use(ElementPlus).mount("#app")
