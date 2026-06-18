<template>
    <main>
        <!--- Intro Section --->
        <section
            id="intro"
            class="flex justify-center items-center min-h-screen bg-white text-gray-900"
        >
            <div class="text-center">
                <h1 class="text-5xl font-bold mb-4">Hi, I'm Alex</h1>
                <RotatingTitles class="mb-4" />
                <!---<p class="text-xl text-gray-500">Welcome to my portfolio.</p>--->
            </div>
        </section>
        <!--- Intro Section End --->

        <!--- Abrams --->
        <section
            id="abrams"
             class="relative flex flex-col lg:flex-row justify-center items-center h-screen bg-[#EFE3D1] text-gray-900 overflow-hidden"
        >
            <div class="w-full h-full order-last lg:order-auto">
                <AutoplayVideo src="/media/video/actiontanks_002.mp4" />
            </div>
            <div class="lg:absolute bottom-0 right-0 max-w-full lg:max-w-2xl lg:h-full flex flex-col items-start gap-5 text-gray-900 lg:backdrop-blur-sm p-8 sm:p-12 lg:p-24">
                <h3 class="text-6xl sm:text-8xl font-bold -mb-3">Armoured vehicle</h3>
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">3d modelling</span>
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">vehicle gameplay</span>
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">art design</span>
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">vehicle animation</span>
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">vfx</span>
                </div>
                <p class="text-base text-justify">Functional, drivable tank, semi toy-scale. Tank treads physics and secondary animations serve to tightly plant the vehicle in the scene and make for a tactile driving experience.</p>
                <p class="text-base text-justify">Three vehicles were made for a vehicle combat game. New liveries and customisations could be unlocked through earning XP during matches. Multi-layered textures would adapt to the environment, wear & tear and battlefield damage.</p>
            </div>
        </section>
        <!--- Abrams End --->

        <!--- Chevrolet --->
        <section
            id="chevrolet"
            class="relative flex flex-col justify-between h-screen bg-[#CACEC1] text-gray-900 overflow-hidden"
        >
            <div class="w-full lg:max-w-2xl absolute top-0 right-0 lg:z-10 flex flex-col items-start gap-5 text-gray-900 p-8 sm:p-12 lg:p-24 lg:pointer-events-none z-10">
                <h3 class="text-6xl sm:text-7xl font-bold">Vintage car</h3>
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">3d modelling</span>
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">vehicle gameplay</span>
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">vehicle physics</span>
                </div>
                <p class="text-base text-justify">I rigged and animated the car and made it fully drivable, with the vehicle physics and controls being inspired by Driver (1999). There were ambitions to use it in an escape-/heist-themed driving game, but I ended up discarding the idea. I am still happy with how the model turned out.</p>
            </div>
            <div class="absolute left-0 bottom-0 w-full min-w-[160vw] aspect-video overflow-hidden lg:inset-0 lg:aspect-auto lg:min-w-auto lg:h-full">
                <ModelViewer
                    path="/models/chevrolet"
                    :frames="128"
                    :pad="3"
                    ext="jpg"
                    :reverse="true"
                    align="left"
                    alt="Chevrolet 3D model"
                />
            </div>
        </section>
        <!--- Chevrolet End --->

        <!--- Toy Trains --->
        <section
            id="toytrains"
            class="relative flex flex-col lg:flex-row justify-center items-center h-screen bg-[#A4BD91] text-gray-900 overflow-hidden"
        >
            <div class="grid grid-cols-12 w-full h-full order-last lg:order-auto">
                <div class="col-span-12 relative">
                    <video autoplay loop muted class="absolute left-1/2 bottom-0 -translate-x-1/2 min-w-full">
                        <source src="/media/video/toytrains_001.mp4">
                    </video>
                </div>
            </div>
            <div class="lg:absolute bottom-0 left-0 lg:max-w-2xl lg:h-full flex flex-col items-start gap-5 text-gray-900 lg:bg-[#A4BD91]/50 lg:backdrop-blur-sm p-8 sm:p-12 lg:p-24 z-10">
                <h3 class="text-6xl sm:text-8xl font-bold">Toy Trains</h3>
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">track editor</span>
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">3d modelling</span>
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">game logic</span>
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">puzzle design</span>
                </div>
                <p class="text-base text-justify">Sandbox + puzzle game with track editor. In the puzzle game mode, players would connect factories with cities with a limited set of track pieces at hand, while manouvering around obstacles and track pieces, which are already in place.</p>
                <p class="text-base text-justify">The sandbox game mode would allow players to freely place track pieces and decorative elements on a plain map and enjoy the aquarium effect of a busy railway network at toy scale.</p>
            </div>
        </section>
        <!--- Toy Trains End --->

        <!--- Fighter Jet --->
        <section
            id="fighterjet"
            class="relative flex flex-col justify-between h-screen bg-[#9ACCD7] text-gray-900 overflow-hidden"
        >
            <div class="w-full lg:max-w-2xl lg:absolute lg:top-0 lg:left-0 lg:z-10 flex flex-col items-start gap-5 text-gray-900 p-8 sm:p-12 lg:p-24 z-10">
                <h3 class="text-6xl sm:text-7xl font-bold">Fighter Jet</h3>
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">3d modelling</span>
                    <span class="text-base font-semibold bg-gray-900/10 backdrop-blur-sm px-1 rounded-sm">presentation</span>
                </div>
                <p class="text-base text-justify">Simple sunday study.</p>
            </div>
             <div class="absolute right-0 bottom-0 w-full min-w-[160vw] aspect-video overflow-hidden lg:inset-0 lg:aspect-auto lg:min-w-auto lg:h-full">
                <ModelViewer
                    path="/models/mitsubishiF2"
                    :frames="128"
                    :pad="3"
                    ext="jpg"
                    :reverse="true"
                    align="right"
                    alt="Mitsubishi F-2 3D model"
                />
            </div>
        </section>
        <!--- Fighter Jet End --->

        <!--- Main Menu UI --->
        <section
            id="mainmmenuui"
            class="relative flex flex-col lg:flex-row justify-center items-center h-screen bg-[#EEEAE4] text-gray-900 overflow-hidden"
        >
            <div class="grid grid-cols-12 w-full h-full">
                <div class="col-span-12 relative">
                    <video autoplay loop muted class="absolute left-1/2 top-0 -translate-x-1/2 min-w-full">
                        <source src="/media/video/actiontanks_001.mp4">
                    </video>
                </div>
            </div>
            <div class="lg:absolute bottom-0 right-0 lg:max-w-xl lg:h-full flex flex-col items-start gap-5 text-gray-900 lg:bg-[#EEEAE4]/50 lg:backdrop-blur-sm p-8 sm:p-12 lg:p-24 z-10">
                <h3 class="text-6xl sm:text-8xl font-bold">Main menu UI</h3>
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">UI design</span>
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">system design</span>
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">progression system</span>
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">vehicle customisation</span>
                    <span class="text-base font-semibold bg-gray-900/20 backdrop-blur-sm px-1 rounded-sm">player retention</span>
                </div>
                <p class="text-base text-justify">Main menu concept for a vehicle combat game. Players would earn XP for performance in matches, unlock new vehicles, liveries, customisations.</p>
                <p class="text-base text-justify">The menu puts the player vehicle front and center, giving players the opportunity to view and identify with their customised vehicle beyond gameplay.</p>
            </div>
        </section>
        <!--- Main Menu UI End --->

        <SectionNav />
    </main>
    <footer class="flex items-center justify-between px-6 sm:px-12 lg:px-24 py-24">
        <div class="flex items-center justify-start">
            <span>© 2026</span>
        </div>
        <div class="flex items-center justify-start gap-8">
            <RouterLink to="/imprint">Imprint</RouterLink>
            <RouterLink to="/privacy-policy">Privacy policy</RouterLink>
        </div>
    </footer>
</template>

<script setup>
import ModelViewer from '../components/ModelViewer.vue'
import AutoplayVideo from '../components/AutoplayVideo.vue'
import SectionNav from '../components/SectionNav.vue'
import RotatingTitles from '../components/RotatingTitles.vue'
</script>
