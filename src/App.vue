<template>
  <LeaferApp :width="windowSize.width" :height="windowSize.height">
    <Leafer>
      <LabubuClassic
        :x="center.x"
        :y="center.y"
        :opacity="0.2"
        :scale="0.2"
        origin="center"
        :animation="animation"
      ></LabubuClassic>
    </Leafer>
  </LeaferApp>

  <div class="absolute left-50% bottom-8 -translate-x-50%">
    <div
      class="text-5xl text-#984628 cursor-pointer animate-duration-2500"
      :class="[playing ? 'i-carbon:pause-outline-filled animate-spin' : 'i-carbon:play-filled']"
      @click="toggle()"
    ></div>
  </div>

  <a
    class="absolute top-4 right-4 z-1 text-3xl i-carbon:logo-github"
    href="https://github.com/xiaohe0601/leafer-labubu"
    title="github"
    target="_blank"
  ></a>

  <audio
    ref="playerEl"
    class="hidden"
    :src="LABUBU_MUSIC"
    preload="auto"
    :loop="true"
  ></audio>
</template>

<script lang="ts" setup>
import type { IAnimation } from "leafer-ui";
import { LeaferApp } from "leafer-vue";
import LABUBU_MUSIC from "@/assets/music/labubu.mp3";
import "@leafer-in/animate";

const windowSize = reactive(useWindowSize());

const center = computed(() => {
  return {
    x: windowSize.width / 2 - 150,
    y: windowSize.height / 2 - 260
  };
});

const animation = shallowRef<IAnimation>();

const {
  playerEl,
  playing,
  toggle
} = useLabubuPlayer(animation);

function boot() {
  animation.value = {
    style: {
      opacity: 1,
      scale: 1
    },
    duration: 1
  };
}

onMounted(() => {
  boot();
});
</script>

<style>
#app {
  position: relative;
}
</style>