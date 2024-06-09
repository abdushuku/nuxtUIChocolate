<script setup lang="ts">
const state = reactive({
  activeButton: 0,
});

const toggleActiveClass = (buttonIndex) => {
  state.activeButton = null;
  if (state.activeButton !== buttonIndex) {
    state.activeButton = buttonIndex;
  }
};
</script>
<template>
  <div class="container">
    <div class="review">
      <div class="review-content">
        <h2 class="review-content-title">
          LEAVE A REVIEW ABOUT <br />
          <span>OUR CHOCOLATE</span>
        </h2>
        <div class="review-content-form">
          <input
            type="text"
            placeholder="Name"
            class="review-content-form-input"
          />
          <input
            type="text"
            placeholder="Email"
            class="review-content-form-input"
          />
          <div class="select">
            <USelect
              :options="['+998', '+7']"
              v-model="number"
              class="w-20 bg-transparent"
            />
            <input
              type="text"
              placeholder="Number"
              class="review-content-form-inputs"
            />
          </div>
          <UTextarea
            v-model="text"
            class="w-full bg-transparent textarea"
          ></UTextarea>
        </div>
        <div class="review-content-btns">
          <button class="review-content-btns-btn text-black" :class="{ active: state.activeButton === 0 }"
              @click="toggleActiveClass(0)">Submit</button>
          <NuxtLink to="/" class="review-content-btns-btn text-black" :class="{ active: state.activeButton === 1 }"
              @click="toggleActiveClass(1)">back home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.review {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  &-content {
    &-title {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 24px;
      line-height: 117%;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      color: var(--chorniy);
      margin-bottom: 40px;
      span {
        color: var(--oranzheviy);
      }
    }
    &-form {
      display: flex;
      align-items: center;
      flex-direction: column;
      row-gap: 18px;
      width: 437px;
      &-input {
        // width: 100%;
        border: 1.5px solid rgba(17, 17, 17, 0.05);
        border-radius: 13px;
        padding: 22px 24px;
        width: 436px;
        height: 66px;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
        background: transparent;
      }
      &-inputs {
        width: 358px;
        border: 1.5px solid rgba(17, 17, 17, 0.05);
        border-radius: 13px;
        padding: 22px 24px;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
        background: transparent;
      }
      & textarea {
        border: 1.5px solid rgba(17, 17, 17, 0.05);
        border-radius: 13px;
        padding: 22px 24px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        letter-spacing: -0.02em;
        color: rgba(64, 64, 64, 0.3);
        background: transparent;
      }
      & .select {
        display: flex;
        align-items: center;
      }
    }
    &-btns{
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: 18px;
      &-btn{
        border-radius: 100px;
        padding: 14px 40px;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 14px;
        border: 1px solid var(--chorniy);
        color: #000;
        transition: 0.3s linear;
        &.active{
          color: #fff;
          background: var(--oranzheviy);
          border: 1px solid var(--oranzheviy);
          &:hover{
            background:transparent;
            border: 1px solid var(--chorniy);
            color: #000;
          }
        }
        &:hover{
          background: var(--oranzheviy);
          border: 1px solid var(--oranzheviy);
          color: #fff;
        }
      }
    }
  }
}
</style>