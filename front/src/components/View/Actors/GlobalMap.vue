<script lang="ts" setup>
import * as echarts from "echarts"
import { onMounted, ref } from "vue"
import nameMap from "@/assets/country-name-zh.json"
import world from "@/assets/world.json"
import worldMapOptions from "./options"
import { getGlobalMap } from "@/api/chat"
const dom = ref()
onMounted(() => {
    const chart = echarts.init(dom.value)
    echarts.registerMap("world", world as any)
    getGlobalMap()
        .then(({ data }) => {
            return data as any[]
        })
        .then(data => {
            return data.map(item => {
                return {
                    name: item.name,
                    value: item.nowConfirm, // 今日新增
                }
            })
        })
        .then(data => chart.setOption(worldMapOptions(data)))
})
</script>

<template>
    <div ref="dom" :style="{ height: '100%' }"></div>
</template>

<style lang="scss">
//
</style>
