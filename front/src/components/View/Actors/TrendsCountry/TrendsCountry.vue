<script lang="ts" setup>
import { onMounted, ref } from "vue"
import * as echarts from "echarts"
import { getCountryLine } from "@/api/chat"
import { createTrendsCountryLineOption } from "./options"
const dom = ref()
onMounted(() => {
    const chart = echarts.init(dom.value)
    const country = ["西班牙", "意大利", "英国"]
    Promise.all(country.map(name => getCountryLine(name)))
        .then(response => {
            return response.map(({ data }, index) => {
                return { data, name: country[index] }
            })
        })
        .then(data => {
            const date = data[0].data.map((item: any) => item.y + "." + item.date)
            const count = data.map(country => {
                const name = country.name
                const y = country.data.map((item: any) => item.confirm) as number[]
                return { name, y }
            })
            const option = createTrendsCountryLineOption({ date, country: count })
            chart.setOption(option)
        })
})
</script>

<template>
    <div class="trends-country" ref="dom"></div>
</template>

<style lang="scss">
.trends-country {
    width: 100%;
    height: 100%;
}
</style>
