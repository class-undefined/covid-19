<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps<{
    name: string
    value: number
    color?: string
}>()
const color = computed(() => props.color ?? "#000000")
</script>

<template>
    <div>
        <div class="action">
            <div class="action-header">{{ props.name }}</div>
            <div class="action-body" :style="{ color, fontSize: '20px' }">{{ props.value }}</div>
        </div>
    </div>
</template>

<style lang="scss">
.action {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.action-header {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.action-body {
    flex: 2;
}
</style>
