<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    // Each entry pairs a Boxicons class (e.g. 'bx-joystick') with its label.
    titles: {
        type: Array,
        default: () => [
            { icon: 'bx-joystick', label: 'Game designer' },
            { icon: 'bx-code-alt', label: 'Frontend developer' },
            { icon: 'bx-paint', label: 'Web designer' },
        ],
    },
    dwell: { type: Number, default: 2000 },   // ms a title stays put
    duration: { type: Number, default: 800 }, // ms of the slide-fade
})

const index = ref(0)
let timer = null

onMounted(() => {
    // Advance after the title has settled (dwell) plus the transition time.
    timer = setInterval(() => {
        index.value = (index.value + 1) % props.titles.length
    }, props.dwell + props.duration)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
    <div
        class="relative overflow-hidden text-2xl text-gray-900/50"
        :style="{ '--dur': duration + 'ms' }"
    >
        <!-- Outgoing slides left + fades out; incoming slides in from the right
             + fades in. They overlap (leaving item is absolutely positioned) so
             the line never collapses or jumps. -->
        <Transition name="rt">
            <span :key="index" class="flex items-center justify-center gap-2">
                <i class="bx" :class="titles[index].icon"></i>
                <span>{{ titles[index].label }}</span>
            </span>
        </Transition>
    </div>
</template>

<style scoped>
.rt-enter-active,
.rt-leave-active {
    transition: opacity var(--dur) ease, transform var(--dur) ease;
}
.rt-leave-active {
    position: absolute;
    inset: 0;
}
.rt-enter-from {
    opacity: 0;
    transform: translateX(100%);
}
.rt-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>
