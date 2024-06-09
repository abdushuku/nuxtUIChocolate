<script setup lang="ts">
const state = reactive({
    close:false
})

const closeModal = () => {
    state.close = !state.close
}
</script>

<template>
  <div class="explore-modal" v-if="!state.close">
    <div class="explore">
      <img src="/images/exploreModalImg.png" alt="" class="explore-image" />
      <IconsClose class="close" @click="closeModal" />
      <div class="explore-modal-bottom">
        <h2 class="explore-modal-bottom-title">
          Explore our <br />
          <span>new chocolate</span>first!
        </h2>
        <form class="explore-modal-bottom-form">
          <input
            type="text"
            placeholder="Enter your email"
            class="explore-modal-bottom-form-input"
          />
          <button
            type="submit"
            class="explore-modal-bottom-form-btn text-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.close{
    position: absolute;
    top: 5%;
    right: 3%;
    cursor: pointer;
}
.explore-modal {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & .explore {
      position: relative;
    //   border: 1px solid transparent;
      border-radius: 15px;
    width: 538px;
    height: 412px;
    background: var(--bіliy);
    &-modal-bottom {
      padding: 40px;
      display: flex;
      flex-direction: column;
      row-gap: 28px;
      background: #fff;
      &-title {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 24px;
        line-height: 117%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
        color: var(--chorniy);
        & span {
          color: var(--oranzheviy);
        }
      }
    }
  }
  &-bottom-form {
    &-input {
      border: 1.5px solid rgba(17, 17, 17, 0.05);
      border-radius: 30px;
      padding: 13px 24px;
      width: 313px;
      height: 52px;
      background: transparent;
      margin-right: 8px;
    }
    &-btn {
      border-radius: 100px;
      padding: 17px 40px;
      width: 137px;
      height: 52px;
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 14px;
      color: #fff;
      background: var(--oranzheviy);
    }
  }
}
</style>