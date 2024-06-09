<template>
  <div>
    <Header />
    <main>
      <InformationSection data-lag="0.5"/>
      <Products data-lag="0.5"/>
      <Made class="made"/>
      <OurProducts data-lag="0.5"/>
      <TopSeller/>
      <Comments data-lag="0.5"/>
      <Explore/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const main = ref();
let smoother;
let ctx;


onMounted(() => {
  ctx = gsap.context(() => {
    // create the smooth scroller FIRST!
    smoother = ScrollSmoother.create({
      smooth: 2, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
    ScrollTrigger.create({
      trigger: '.box-c',
      pin: true,
      start: 'center center',
      end: '+=300',
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

</script>
