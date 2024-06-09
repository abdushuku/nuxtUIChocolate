<template>
  <header>
    <Navbar class="nav"/>
    <div class="container">
      <div class="header">
        <div class="header-content">
          <div class="header-content-left">
            <h1 class="header-content-left-title">
              Treat yourself or a loved one to <br />
              our finest ingredients for a moment <br />
              of pure delight!
            </h1>
            <div class="header-content-left-btns">
              <button
                class="header-content-left-btns-btn"
                :class="{ active: activeButton === 0 }"
                @click="toggleActiveClass(0)"
              >
                Buy now
              </button>
              <button
                class="header-content-left-btns-btn"
                :class="{ active: activeButton === 1 }"
                @click="toggleActiveClass(1)"
              >
                How it’s made
              </button>
            </div>
          </div>
          <div class="header-content-right">
            <p class="header-content-right-text">scroll down</p>
            <IconsScrollDown />
          </div>
        </div>
        <img src="/images/headerBanner.png" alt="" class="banner" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import Made from '~/components/Made.vue';

// Data
const activeButton = ref(0);

// Methods
const scrollToMade = () => {
  const element = document.querySelector('.made');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }
};

const toggleActiveClass = (buttonIndex) => {
  // Toggle the active state of the clicked button
  if (activeButton.value !== buttonIndex) {
    activeButton.value = buttonIndex;
  } else {
    activeButton.value = null; // Reset if the same button is clicked again
  }
};

// GSAP Animation
onMounted(() => {
  gsap.from(".navbar", {
    y: 100,
    opacity: 0,
    delay: 1,
    stagger: 0.1

  });
  gsap.from('.header', {
    y:100,
    opacity: 0,
    delay: 2,
    stagger: 0.2
  })
  gsap.from(".header-content", {
    y: 100,
    opacity: 0,
    delay: 3,
    stagger: 0.3
  })
});
</script>

<style lang="scss">
.header {
  position: relative;
  margin-bottom: 72px;
  .banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 30px;
  }
  height: 600px;
  &-content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    // width: 1056px;
    height: 600px;
    padding: 40px;
    &-left {
      &-title {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 28px;
        line-height: 121%;
        letter-spacing: -0.03em;
        color: #fff;
        text-align: justify;
        padding-bottom: 32px;
      }
      &-btns {
        display: flex;
        align-items: center;
        column-gap: 14px;
        &-btn {

          &.active {
            background: var(--oranzheviy);
            border: 1px solid var(--oranzheviy);
          }
          padding: 14px 40px;
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 14px;
          outline: none;
          border: none;
          border-radius: 100px;
          color: #fff;
          border: 1px solid #fff;
            border-radius: 100px;
            background: transparent;
            transition: 0.3s ease;
        }
      }
    }
    &-right{
        display: flex;
        align-items: center;
        gap: 14px;
        color: #fff;
    }
  }
}
</style>