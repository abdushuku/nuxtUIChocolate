<template>
  <div class="container">
    <nav class="navbar">
      <div>
        <a href="" class="logo"></a><img src="/images/logo.png" alt="" />
      </div>
      <ul class="navbar-list">
        <li class="navbar-list-item">
          <a href="" class="navbar-list-link">Home</a>
        </li>
        <li class="navbar-list-item">
          <a href="" class="navbar-list-link" @click="scrollToMade">How it’s made?</a>
        </li>
        <li class="navbar-list-item">
          <a href="" class="navbar-list-link">Our products</a>
        </li>
        <li class="navbar-list-item">
          <a href="" class="navbar-list-link">Top sellers</a>
        </li>
        <li class="navbar-list-item">
          <a href="" class="navbar-list-link">Chocolate is loved</a>
        </li>
      </ul>
      <div class="navbar-icons">
        <a href="">
          <IconsInstagram />
        </a>
        <a href="">
          <IconsTwiter />
        </a>
      </div>
    </nav>
    <!-- <button @click="scrollToMade" class="text-black"> how it is made</button> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother 

onMounted(() => {
  const scrollToMade = () => {
    smoother.scrollTo('.made', true, 'center center');
  }
    return { scrollToMade }
});

</script>

// <style lang="scss">
.navbar {
  display: flex;
  // align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  &-list {
    display: flex;
    align-items: center;
    column-gap: 24px;
    list-style: none;
    &-link {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 14px;
      line-height: 114%;
      letter-spacing: -0.02em;
      color: var(--chorniy);
    }
  }
  &-icons {
    display: flex;
    align-items: center;
    column-gap: 18px;
  }
}
</style>