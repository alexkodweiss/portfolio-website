<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
    // Base path (in /public) where the frames live, no trailing slash.
    path: { type: String, required: true },
    // Number of frames in the sequence.
    frames: { type: Number, default: 32 },
    // Zero-padding width of the frame index in the filename.
    pad: { type: Number, default: 2 },
    // File extension of the frames.
    ext: { type: String, default: 'png' },
    // Reverse the rotation direction relative to cursor movement.
    reverse: { type: Boolean, default: false },
    // Easing factor applied each frame (0..1). Lower = more glide/inertia.
    // Must be < 1 for the cross-fade-in-motion to be visible (1 = instant snap).
    ease: { type: Number, default: 0.03 },
    // Horizontal focus kept in view when object-cover crops the frame.
    // Accepts any object-position value; 'left' | 'center' | 'right' cover most.
    align: { type: String, default: 'center' },
    alt: { type: String, default: '' },
})

// Pre-compute every frame URL once: /path/frame00.png ... frameNN.ext
const frameUrls = computed(() =>
    Array.from({ length: props.frames }, (_, i) => {
        const n = String(i).padStart(props.pad, '0')
        return `${props.path}/frame${n}.${props.ext}`
    })
)

const stage = ref(null)
// Eased position along the sequence; targetPos is where the cursor points.
const position = ref(0)
let targetPos = 0
// Only one frame is shown at a time — the nearest whole frame to position.
const activeIndex = computed(() => Math.round(position.value))
let rafId = null

// Easing loop: glide position toward the cursor target so fast flicks
// decelerate instead of snapping. Stops itself once settled to save CPU.
function tick() {
    const diff = targetPos - position.value
    if (Math.abs(diff) < 0.001) {
        position.value = targetPos
        rafId = null
        return
    }
    position.value += diff * props.ease
    rafId = requestAnimationFrame(tick)
}

function setTarget(ratio) {
    const r = props.reverse ? 1 - ratio : ratio
    // Snap the target to a whole frame so the model always settles on a single
    // crisp frame; the eased position glides there (and cross-fades) in between.
    targetPos = Math.round(r * (props.frames - 1))
    if (rafId === null) rafId = requestAnimationFrame(tick)
}

// Cross-fade only the two frames bracketing the current position. While gliding,
// the upper frame fades in by the fractional remainder; once settled on a whole
// frame that remainder is 0, leaving a single sharp frame (no ghosting at rest).
function opacityFor(i) {
    const base = Math.floor(position.value)
    const frac = position.value - base
    if (i === base) return 1
    if (i === base + 1) return frac
    return 0
}

// One handler for mouse, pen and touch via Pointer Events.
function onPointerMove(e) {
    const rect = stage.value.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    setTarget(Math.min(1, Math.max(0, ratio)))
}

// Preload all frames so swapping is instant and flicker-free.
onMounted(() => {
    frameUrls.value.forEach((url) => {
        const img = new Image()
        img.src = url
    })
})

onBeforeUnmount(() => {
    if (rafId !== null) cancelAnimationFrame(rafId)
})
</script>

<template>
    <div
        ref="stage"
        class="relative h-full w-full overflow-hidden touch-none select-none"
        @pointermove="onPointerMove"
    >
        <!-- Stack all frames; only the active one is visible. Keeping them in
             the DOM (rather than swapping one src) avoids any decode hitch. -->
        <img
            v-for="(url, i) in frameUrls"
            :key="url"
            :src="url"
            :alt="i === activeIndex ? alt : ''"
            draggable="false"
            class="pointer-events-none absolute inset-0 h-full w-full object-cover"
            :style="{ opacity: opacityFor(i), objectPosition: align }"
        />
    </div>
</template>
