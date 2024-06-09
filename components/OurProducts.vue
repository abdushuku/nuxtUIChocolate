<template>
  <div class="container">
    <div class="slider" data-speed="0.8">
      <h2 class="slider-title">Our <span>pRODUCTS</span></h2>
      <div class="slider-content">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4 snap-start', container:'rounded-lg'}"
          class="overflow-hidden"
          arrows
        >
          <div class="slider-content-item">
            <img :src="item.image" alt="" class="slider-content-item-img" />
            <h2 class="slider-content-item-title">{{ item.title }}</h2>
            <p class="slider-content-item-text">{{ item.text }}</p>
            <button class="slider-content-item-btn">{{ item.price }}</button>
          </div>
        </UCarousel>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const items = [
  {
    image: "/images/orange.png",
    title: "orange ",
    text: "Dark chocolate",
    price: "45 UAH",
  },
  {
    image: "/images/apple-cranberry.png",
    title: "APPLE&CRANBERRY",
    text: "Milk chocolate",
    price: "50 UAH",
  },
  {
    image: "/images/lime-sea-salt.png",
    title: "lime&sea salt",
    text: "Dark chocolate",
    price: "66 UAH",
  },
  {
    image: "/images/pineapple.png",
    title: "pineapple",
    text: "Dark chocolate",
    price: "54 UAH",
  },
  {
    image: "/images/class.png",
    title: "Classic",
    text: "Milk chocolate",
    price: "45 UAH",
  },
  {
    image: "/images/honey.png",
    title: "honey",
    text: "Milk chocolate",
    price: "50 UAH",
  },
  {
    image: "/images/roasted-fruits.png",
    title: "Roasted fruits",
    text: "Dark chocolate",
    price: "66 UAH",
  },
  {
    image: "/images/class-white.png",
    title: "Classic",
    text: "White chocolate",
    price: "54 UAH",
  },
]

import { ref, onMounted  } from 'vue';

const carouselRef = ref();
onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 2500)
})
</script>

<style lang='scss'>
.slider {
  margin-bottom: 126px;
  &-title {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    text-align: center;
    color: var(--chorniy);
    & span {
      color: var(--oranzheviy);
    }
    margin-bottom: 50px;
  }
  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 19px;
    width: 1136px;
    height: 364px;
    &-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border: 1px solid rgba(17, 17, 17, 0.1);
      border-radius: 15px;
      width: 270px;
      height: 364px;
      padding: 20px;
      background: #fff;
      &-title {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 18px;
        line-height: 133%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: var(--chorniy);
        margin-top: 8px;
        margin-bottom: 2px;
      }
      &-text {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 12px;
        line-height: 117%;
        letter-spacing: -0.02em;
        color: rgba(17, 17, 17, 0.7);
        margin-bottom: 18px;
      }
      &-btn {
        border: 1px solid rgba(17, 17, 17, 0.1);
        border-radius: 100px;
        padding: 8px 20px;
        background: var(--bіliy);
        padding: 8px 20px;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 14px;
        color: #000;
        cursor: pointer;
      }
    }
  }
}
</style>