<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    src: { type: String, required: true },
    type: { type: String, default: 'video/mp4' },
})

const video = ref(null)
let teardown = null

onMounted(() => {
    let ticking = false

    // Start playback the instant the video's bottom edge reaches the viewport
    // bottom — i.e. the whole video is on screen and the user is about to scroll
    // past it. Then keep looping (we stop listening).
    //
    // We read the live geometry on each scroll frame instead of using
    // IntersectionObserver thresholds: those sample at coarse ratios, so for a
    // video taller than the viewport the exact bottom-edge moment is never hit
    // on the way in and the trigger fires late. A direct rect check is exact for
    // any height/aspect ratio.
    const check = () => {
        if (!video.value) return
        if (video.value.getBoundingClientRect().bottom <= (window.innerHeight + 100)) {
            video.value.play().catch(() => {}) // ignore autoplay-policy rejections
            teardown()
        }
    }

    const onScroll = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => {
            ticking = false
            check()
        })
    }

    teardown = () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    check() // handle the case where it's already in view on load
})

onBeforeUnmount(() => teardown?.())
</script>

<template>
    <!-- No `autoplay`: playback is started manually once in view. `muted` is
         required for browsers to allow programmatic play without a user gesture. -->
    <video
        ref="video"
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
    >
        <source :src="src" :type="type" />
    </video>
</template>
