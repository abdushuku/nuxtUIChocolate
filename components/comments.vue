<script setup lang="ts">
const items = [
    {
        image:'/images/comments-1.png',
        name:'Victoria Dobrzhanska',
        user_comment:'I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.'
    },
    {
        image:'/images/comments-2.png',
        name:'Nazar Babenko',
        user_comment:'This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.'
    },
    {
        image:'/images/comments-3.png',
        name:'Olena Kampusch',
        user_comment:' Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.'
    },
]
</script>
<template>
    <div class="container comments">
        <div class="content">
            <h2 class="content-title">chocolate<span> is loved</span></h2>
            <div class="content-comments">
                <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'md:basis-1/2 lg:basis-1/3 ', }" class="overflow-x-visible" arrows>
                    <div class="content-comments-items">
                        <div class="content-comments-items-top">
                            <img :src="item.image" alt='users foto' class="content-comments-items-img">
                            <p class="content-comments-items-name">{{ item.name }}</p>
                        </div>
                        <p class="content-comments-items-comment text-black">{{ item.user_comment }}</p>
                    </div>
                </UCarousel>
            </div>
            <NuxtLink to="/review" class="content-btn text-black">Leave  a review</NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 130px;
    &-btn{
        border: 1px solid var(--oranzheviy);
        border-radius: 100px;
        padding: 14px 40px;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 18px;
        color: var(--chorniy);
    }
    &-title{
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 24px;
        line-height: 117%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
        text-align: center;
        color: var(--oranzheviy);
        & span{
            color: var(--chorniy);
        }
        margin-bottom: 90px;
    }
    &-comments{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 28px;
        margin-bottom: 50px;
        &-items{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 360px;
            height: 200px;
            border: 1px solid rgba(17, 17, 17, 0.1);
            border-radius: 15px;
            box-shadow: 0 9px 27px 0 rgba(215, 228, 249, 0.25);
            background: #fff;
            position: relative;
            padding: 22px;
            &-top{
                position: absolute;
                top: -17%;
                left: 0%;
                right: 0;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
            &-name{
                font-family: var(--font-family);
                font-weight: 600;
                font-size: 18px;
                line-height: 133%;
                text-align: center;
                color: var(--chorniy);
                margin-top: 18px;
                margin-bottom: 25px;
            }
            &-comment{
                
                font-family: var(--font-family);
                font-weight: 400;
                font-size: 14px;
                line-height: 129%;
                letter-spacing: -0.02em;
                text-align: center;
                color: rgba(17, 17, 17, 0.7);
            }
        }
    }
}
</style>