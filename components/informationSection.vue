<template>
    <div class="information">
        <div class="container">
        <div class="information-content">
            <div class="information-content-item item-1">
                <div class="information-content-item-icon">
                    <IconsChocolate/>
                </div>
                <h2 class="information-content-item-title">Unsurpassed taste</h2>
                <p class="information-content-item-text">Crafted with the finest quality cocoa beans and a dedication to perfection, each bite is a decadent experience that simply cannot be matched. Savor the richness and complexity of our Unsurpassed Taste and discover a new level of chocolate bliss.</p>
            </div>
            <div class="information-content-item item-2">
                <div class="information-content-item-icon">
                    <IconsMoney/>
                </div>
                <h2 class="information-content-item-title">Affordable price</h2>
                <p class="information-content-item-text">Indulge in high-quality chocolate without breaking the bank with Simply Chocolate's selection of affordable treats. Enjoy mouth-watering truffles and velvety chocolate bars without sacrificing taste or quality. Browse our selection and indulge in affordable luxury today.</p>
            </div>
            <div class="information-content-item item-3">
                <div class="information-content-item-icon">
                    <IconsSpoon/>
                </div>
                <h2 class="information-content-item-title">Own production</h2>
                <p class="information-content-item-text">We take pride in our own production process, ensuring that every step is carefully crafted to perfection. From selecting the finest ingredients to handcrafting each piece, our attention to detail is evident in every bite.</p>
            </div>

        </div>
       </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
    gsap.from(".item-3", {
        x: 200,
        opacity:0,
        stagger: 0.6,
        delay:3
    })
    gsap.from(".item-2", {
        x: 200,
        opacity:0,
        stagger: 0.4,
        delay:2     
    })
    gsap.from(".item-1", {
        x: 200,
        opacity:0,
        stagger: 0.3,
        delay:1
    })
})
</script>

<style lang="scss">
.information{
    background: var(--temno-fioletoviy);
    margin-bottom: 127px;
    &-content{
        display: flex;
        align-items: center;
        gap: 70px;
        padding: 47px;
        &-item{
            position: relative;
            &-icon{
                border: 1px solid rgba(255, 255, 255, 0.5);
                border-radius: 365px;
                width: 62px;
                height: 62px;
                margin-bottom: 22px;

            }
            &-title{
                font-family: var(--font-family);
                font-weight: 600;
                font-size: 18px;
                color: #fff;
                margin-bottom: 18px;
            }
            &-text{
                font-family: var(--font-family);
                font-weight: 400;
                font-size: 14px;
                letter-spacing: -0.02em;
                color: rgba(255, 255, 255, 0.7);
            }
            &::before{
                content: '';
                position: absolute;
                right: -18px;
                bottom: 52px;
                width: 1px;
                height: 124px;
                background: rgba(255, 255, 255, 0.5);
                color: rgba(255, 255, 255, 0.5);
                display: inline-block;
            }   
        }
    }
}
</style>