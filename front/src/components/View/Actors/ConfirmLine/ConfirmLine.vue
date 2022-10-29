<script lang="ts" setup>
import { onMounted, ref } from "vue"
import * as echarts from "echarts"
import { getConfirmLine } from "@/api/chat"
import { createLineOption } from "./options"
const dom = ref()
onMounted(() => {
    const chart = echarts.init(dom.value)
    getConfirmLine()
        .then(({ data }) => {
            return data as any[]
        })
        .then(data => {
            return data.map(item => {
                return {
                    y: item.confirmedCount,
                    x: item.dateId,
                }
            })
        })
        .then(data => {
            chart.setOption(createLineOption(data))
        })
})
</script>

<template>
    <div class="comfirm-line" ref="dom"></div>
</template>

<style lang="scss">
.comfirm-line {
    width: 100%;
    height: 100%;
}
</style>
