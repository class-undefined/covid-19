<script lang="ts" setup>
import { getChinaConfirm, getCityLine } from "@/api/chat"
import { ref } from "vue"
import Line from "./Actors/Line/Line.vue"
import Broadcast from "./Actors/Broadcast/Broadcast.vue"
import ConfirmLine from "./Actors/ConfirmLine/ConfirmLine.vue"
import GlobalMap from "./Actors/GlobalMap.vue"
import TrendsCountry from "./Actors/TrendsCountry/TrendsCountry.vue"
import Header from "./Header.vue"
const beijing = ref([] as any[])
const china = ref([] as any[])
getCityLine("110000")
    .then(({ data }) => {
        return data as any[]
    })
    .then(data => {
        return data.map(item => {
            return {
                y: item.confirm_add,
                x: item.year + "." + item.date,
            }
        })
    })
    .then(data => (beijing.value = data))

getChinaConfirm()
    .then(({ data }) => {
        return data.chinaDayAddListNew as any[]
    })
    .then(data => {
        return data.map(item => {
            return {
                y: item.localConfirmadd,
                x: item.y + "." + item.date,
            }
        })
    })
    .then(data => (china.value = data))
</script>

<template>
    <div class="view">
        <Header />
        <div class="actors">
            <div class="actors-row">
                <div class="actors-col-1">
                    <ConfirmLine />
                </div>
                <div class="actors-col-2">
                    <Broadcast />
                </div>
                <div class="actors-col-1">
                    <Line title="北京新增本土趋势" :data="beijing" />
                </div>
            </div>
            <div class="actors-row">
                <div class="actors-col-1">
                    <TrendsCountry />
                </div>
                <div class="actors-col-2">
                    <GlobalMap />
                </div>
                <div class="actors-col-1">
                    <Line title="全国新增本土趋势" :data="china" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.view {
    width: 100%;
    height: 100%;
}
.actors {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
}
.actors-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
}
.actors-col-1 {
    flex: 2;
}
.actors-col-2 {
    flex: 3;
}
</style>
