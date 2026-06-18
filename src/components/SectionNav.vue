<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const count = ref(0); // number of sections (for the dots)
const active = ref(0); // index of the section currently at screen center
let sections = [];
let observer = null;

function go(i) {
    if (i < 0 || i >= sections.length) return;
    sections[i].scrollIntoView({ behavior: "smooth" });
}

onMounted(() => {
    // Discover sections by DOM order (no reliance on ids).
    sections = Array.from(document.querySelectorAll("main section"));
    count.value = sections.length;

    // The section crossing the vertical center of the viewport is "active".
    observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    active.value = sections.indexOf(entry.target);
                }
            }
        },
        { rootMargin: "-50% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
    <!-- Previous (top center) -->
    <button
        @click="go(active - 1)"
        :disabled="active === 0"
        class="fixed top-4 left-1/2 -translate-x-1/2 z-50 size-10 flex items-center justify-center text-gray-900/50 hover:text-gray-900 bg-white/10 backdrop-blur-sm rounded-full cursor-pointer disabled:opacity-0 disabled:cursor-default"
    >
        <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
        >
            <path d="M18 15l-6-6-6 6" />
        </svg>
    </button>

    <nav
        class="fixed left-0 sm:left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
    >
        <!-- Dots: filled = active, hollow = others -->
        <div
            class="flex flex-col justify-center text-gray-900 sm:bg-white/10 sm:backdrop-blur-sm rounded-r-xl sm:rounded-full p-1"
        >
            <button
                v-for="i in count"
                :key="i"
                @click="go(i - 1)"
                class="group p-0.75"
                    :class="
                        i - 1 === active
                            ? ''
                            : 'cursor-pointer'
                    "
            >
                <div
                    class="size-2 rounded-full bg-current"
                    :class="
                        i - 1 === active
                            ? 'scale-100 bg-current'
                            : 'scale-75 opacity-50 group-hover:scale-100'
                    "
                ></div>
            </button>
        </div>

    </nav>

    <!-- Next (bottom center) -->
    <button
        @click="go(active + 1)"
        :disabled="active === count - 1"
        class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 size-10 flex items-center justify-center text-gray-900/50 hover:text-gray-900 bg-white/10 backdrop-blur-sm rounded-full cursor-pointer disabled:opacity-0 disabled:cursor-default"
    >
        <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    </button>
</template>
