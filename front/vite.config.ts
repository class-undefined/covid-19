import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import AutoImport from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"

import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: "Icon",
                }),
            ],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve("src"),
            "@comps": resolve("src/components"),
        },
    },
})
