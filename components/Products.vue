<template>
  <div class="container">
    <div class="products" data-speed="0.8">
      <div class="products-content">
        <h2 class="products-content-title">
          IT ALL ADDS UP TO ONE <br />
          EXCEPTIONAL <span>TASTE</span> SENSATION
        </h2>
        <p class="products-content-text">
          At Simply Chocolate, we believe that the secret to exceptional
          chocolate is in the details. From the sourcing of the finest
          ingredients to the careful crafting of each individual piece, every
          step of our process adds up to one exceptional taste sensation.
        </p>
      </div>
      <div class="products-container">
        <div class="products-container-item" @click="openModal(1)">
          <div class="product-container-item-images">
            <img src="/images/product-chocolate.png" alt="" />
          </div>
          <p class="product-container-item-text">MILK CHOCOLATE</p>
        </div>
        <div class="products-container-item" @click="openModal(2)">
          <div class="product-container-item-images">
            <img src="/images/product-milke.png" alt="" />
          </div>
          <p class="product-container-item-text">Milk</p>
        </div>
        <div class="products-container-item" @click="openModal(3)">
          <div class="product-container-item-images">
            <img src="/images/product-nuts.png" alt="" />
          </div>
          <p class="product-container-item-text">nuts</p>
        </div>
        <div class="products-container-item" @click="openModal(4)">
          <div class="product-container-item-images">
            <img src="/images/product-semi.png" alt="" />
          </div>
          <p class="product-container-item-text">SEMI - SWEET CHOCOLATE</p>
        </div>
      </div>
      <div class="products-modals">
        <div v-if="this.itemIndex === 1" @close="closemodal()">
            <ModalsChocalateModal />
        </div>
        <div v-if="this.itemIndex === 2" @close="closemodal()">
            <ModalsMilkModal />
        </div>
        <div v-if="this.itemIndex === 3" @close="closemodal()">
            <ModalsNutsModal  />
        </div>
        <div v-if="this.itemIndex === 4" @close="closemodal()">
            <ModalsSemiModal  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      itemIndex: null,
    };
  },
  methods: {
    addIndex(index){
        this.itemIndex = index
    },
    openModal(index) {
        this.addIndex(index)
        if(index === this.itemIndex) {
            this.showModal = !this.showModal;
        }
    },
    closemodal(){
        this.showModal = !this.showModal
    }
  },
};
</script>

<style lang="scss">
.products {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 50px;
  margin-bottom: 126px;
  position: relative;
  &-modals {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 19px;
    & div{
        cursor: pointer;
    }
  }
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 28px;
    width: 486px;
    height: 156px;
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
    }
    &-text {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
      line-height: 129%;
      letter-spacing: -0.02em;
      text-align: center;
      color: var(--chorniy);
    }
  }
  &-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 19px;
    &-item {
      border-radius: 15px;
      width: 270px;
      height: 270px;
      padding: 27px;
      border: 1px solid var(--oranzheviy);
      cursor: pointer;
      & img {
        margin-bottom: 36px;
      }
      &:nth-child(1) {
        background: var(--oranzheviy);
        color: #fff;
      }
      &:nth-child(3) {
        background: #1e1823;
        color: #fff;
      }
      &-text {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 14px;
        line-height: 129%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: var(--chorniy);
      }
    }
  }
}
</style>