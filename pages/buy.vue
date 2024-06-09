<script setup lang="ts">
import { ref, reactive } from "vue";

const state = reactive({
  activeButton: 0,
});

const toggleActiveClass = (buttonIndex) => {
  state.activeButton = null;
  if (state.activeButton !== buttonIndex) {
    state.activeButton = buttonIndex;
  }
};
const items = [
  {
    image: "/images/buynow-chocolate1.png",
    grm: "100 g",
  },
  {
    image: "/images/buynow-chocolate2.png",
    grm: "200 g",
  },
  {
    image: "/images/buynow-chocolate3.png",
    grm: "300 g",
  },
];
const text = ref("");
console.log(text);
</script>

<template>
  <div class="container">
    <div class="baynow">
      <!-- <NuxtLink to="/" class="baynow-back text-black">back home</NuxtLink> -->
      <div class="baynow-content">
        <h2 class="baynow-content-title text-black">bUY <span>nOW</span></h2>
        <div class="baynow-content-items">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="baynow-content-items-item"
          >
            <img
              :src="item.image"
              alt=""
              class="baynow-content-items-item-img"
            />
            <button class="baynow-content-items-item-btn">
              {{ item.grm }}
            </button>
          </div>
        </div>
        <div class="informations">
          <div class="information-top">
            <div class="informations-form">
              <div class="inforamtions-form-group">
                <label for="info" class="text-black"
                  >Presonal information</label
                >
                <div class="informations-top-inputs">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Surname" />
                </div>
              </div>
              <div class="informations-form-group">
                <label for="email">Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div class="informations-form-group">
                <label for="phoneNumber">Phone Number</label>
                <div class="useSelect">
                  <tamplate>
                    <USelect
                      v-modal="number"
                      :options="['+998', '+7']"
                      option-atribute="code"
                      class="text-white w-20"
                    />
                  </tamplate>
                  <input type="text" placeholder="Enter your phone" />
                </div>
              </div>
              <div class="informations-form-group">
                <label for="cardNumbers">Card number</label>
                <input type="text" placeholder="Enter card" />
              </div>
              <div class="informations-form-group">
                <label for="Comment">Comment</label>
                <UTextarea v-model="text" class="text-black"></UTextarea>
              </div>
            </div>
          </div>
          <div class="informations-bottom-btns">
            <button
              type="submit"
              class="informations-bottom-btns-btn text-black"
              :class="{ active: state.activeButton === 0 }"
              @click="toggleActiveClass(0)"
            >
              Submit
            </button>
            <NuxtLink
              to="/"
              class="informations-bottom-btns-btn text-black"
              :class="{ active: state.activeButton === 1 }"
              @click="toggleActiveClass(1)"
              >back home</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.baynow {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  &-content {
    border-radius: 15px;
    width: 609px;
    height: 1058px;
    display: flex;
    flex-direction: column;
    &-title {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 24px;
      line-height: 117%;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      text-align: center;
      color: var(--oranzheviy);
      & span {
        color: var(--chorniy);
      }
      margin-bottom: 50px;
    }
    &-items {
      display: flex;
      align-items: center;
      width: 513px;
      height: 196px;
      justify-content: space-between;
      &-item {
        background: #fff;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 24px 19px 18px 19px;
        border: 1px solid rgba(17, 17, 17, 0.1);
        border-radius: 15px;
        margin-bottom: 40px;
        &-btn {
          border: 1px solid rgba(17, 17, 17, 0.1);
          border-radius: 100px;
          padding: 8px 27px;
          color: var(--chorniy);
          background: var(--bіliy);
          margin-top: 14px;
        }
      }
    }
  }
  & .informations {
    display: flex;
    flex-direction: column;
    width: 513px;
    &-form {
      display: flex;
      flex-direction: column;
      row-gap: 18px;
    }
    &-form-group {
      display: flex;
      flex-direction: column;
      & .useSelect {
        display: flex;
        align-items: center;
        & input {
          width: 100%;
        }
      }
      & label {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 129%;
        letter-spacing: -0.02em;
        color: #000;
        margin-bottom: 8px;
      }
      & input {
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
    }
    &-top-inputs {
      display: flex;
      align-items: center;
      gap: 21px;
      & input {
        border: 1.5px solid rgba(17, 17, 17, 0.05);
        border-radius: 13px;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
        width: 246px;
        height: 66px;
        padding: 22px 24px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 18px;
        letter-spacing: -0.02em;
        color: rgba(64, 64, 64, 0.3);
        background: transparent;
      }
    }
    &-bottom-btns {
      display: flex;
      align-items: center;
      gap: 20px;
      &-btn {
        padding: 14px 40px;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 14px;
        outline: none;
        border: none;
        border-radius: 100px;
        color: #000;
        border: 1px solid #000;
        border-radius: 100px;
        background: transparent;
        margin-top: 18px;
        transition: 0.3s ease;
        &.active {
          background: var(--oranzheviy);
          color: #ffff;
          border: 1px solid var(--oranzheviy);
        }
      }
    }
  }
}
</style>