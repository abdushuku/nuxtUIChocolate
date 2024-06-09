<template>
  <div class="modal">
    <div class="modal-top">
        <h2 class="modal-top-title">semi - sweet <br> chocolate</h2>
        <div class="modal-top-btns">
            <button class="modal-top-btns-btn" :class="{ active: activeButton === 0 }" @click="toggleActiveClass(0)">sweet chocolate</button>
            <button class="modal-top-btns-btn" :class="{ active: activeButton === 1 }" @click="toggleActiveClass(1)">the benefits</button>
        </div>
    </div>
    <div>
        <p class="modal-text">Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate. Semisweet is darker than milk chocolate. In a taste comparison, it has a slightly bitter taste whereas milk chocolate is sweeter and more mellow. </p>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      activeButton: 0,
    };
},
methods: {
    toggleActiveClass(buttonIndex) {
      // Reset the state of all buttons
      this.activeButton = null;

      // Toggle the active state of the clicked button
      if (this.activeButton !== buttonIndex) {
        this.activeButton = buttonIndex;
      }
    },
},
}
</script>

<style lang="scss">
.modal{
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 270px;
    height: 270px;
    border-radius: 15px;
    background: #fff;
    padding: 19px;
    overflow: hidden;
    &-top{
        display: flex;
        flex-direction: column;
        gap: 8px;
        &-title{
            font-family: var(--font-family);
            font-weight: 600;
            font-size: 18px;
            letter-spacing: -0.03em;
            text-transform: uppercase;
            color: var(--chorniy);
        }
        &-btns{
            display: flex;
            align-items: center;
            gap: 8px;
            &-btn{
                padding: 6px 16px;
                border-radius: 35px;
                padding: 6px 16px;
                border: 1px solid var(--oranzheviy);
                border-radius: 35px;
                font-family: var(--font-family);
                font-weight: 400;
                font-size: 10px;
                line-height: 120%;
                color: var(--chorniy);
                cursor: pointer;
                background: transparent;
            }
        }
    }
    &-text{
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 129%;
        letter-spacing: -0.02em;
        color: var(--chorniy);
    }
}
</style>