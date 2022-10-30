<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { getBroadcast } from "@/api/chat"
import Action from "./Action.vue"
const actions = ref([] as { name: string; value: number; color?: string }[])
getBroadcast().then(({ data }) => {
    const items = [
        { name: "新增确诊", value: data.confirmAdd },
        { name: "新增死亡", value: data.deadAdd },
        { name: "现有确诊", value: data.nowConfirm },
        { name: "累计确诊", value: data.confirm },
        { name: "累计死亡", value: data.dead },
        { name: "累计治愈", value: data.heal },
    ] as { name: string; value: number; color?: string }[]
    actions.value = items
})
</script>

<template>
    <div class="broadcast">
        <Action
            class="action"
            v-for="action in actions"
            :key="action.name"
            :name="action.name"
            :value="action.value"
            :color="action.color"
        />
    </div>
</template>

<style lang="scss">
.broadcast {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    flex-basis: 33%;
    text-align: center;
}
</style>
