<script lang="ts" setup>
import { onMounted, ref, watch } from "vue"
import * as echarts from "echarts"
import { createLineOption } from "./options"
const dom = ref()
const props = defineProps<{
    data: { x: string; y: number }[]
    title: string
}>()
onMounted(() => {
    const chart = echarts.init(dom.value)
    watch(
        () => props.data,
        cur => {
            chart.setOption(createLineOption(props.title, cur))
        }
    )
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
