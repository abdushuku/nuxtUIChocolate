<script setup lang="ts">
const state = reactive({
    openModal: false
})

const openModals = () => {
    state.openModal = !state.openModal
}
</script>

<template>
        <div class="explore">
            <div class="container">
                <div class="explore-content">
                    <h2 class="explore-content-title">exPLORE OUR NEW <br> CHOCOLATE FIRST</h2>
                    <p class="explore-content-text">From the velvety texture to the rich and complex flavor, our New Chocolate is a true indulgence that will leave you craving more. Made with only the finest ingredients and handcrafted with the utmost care, each piece is a work of art that is sure to please.</p>
                    <button class="explore-content-btn" @click="openModals">Subscribe</button>
                </div>
            </div>
            <img src="/images/lastSection.png" alt="" class="explore-banner">
            <ModalsExploreModal class="explore-modal" v-if="state.openModal"/>
        </div>
</template>

<style scoped lang='scss'>
.explore{
    position: relative;
    &-modal{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    &-content{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 370px;
        flex-direction: column;
        row-gap: 24px;
        padding: 72px;
        &-title{
            font-family: var(--font-family);
            font-weight: 600;
            font-size: 24px;
            line-height: 117%;
            letter-spacing: -0.03em;
            text-transform: uppercase;
            text-align: center;
            color: #fff;
        }
        &-text{
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 14px;
            line-height: 129%;
            letter-spacing: -0.02em;
            text-align: center;
            color: #fff;
            width: 467px;
        }
        &-btn{
            border-radius: 100px;
            padding: 14px 40px;
            width: 172px;
            height: 50px;
            font-family: var(--font-family);
            font-weight: 600;
            font-size: 18px;
            color: #fff;
            background: var(--oranzheviy);
        }
    }
    &-banner{
        height: 370px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: -1;
    }
}
</style>