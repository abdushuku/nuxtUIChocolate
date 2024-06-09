<script>

</script>

<template>
    <div class="container">
        <div class="seller">
            <div class="seller-content">
                <h2 class="seller-content-title ">Top <span>Seller</span></h2>
                <div class="seller-content-images">
                    <img src="/images/sallers-nut.png" alt="" class="seller-content-images-img">
                    <img src="/images/chocolate-1.png" alt="" class="seller-content-images-img">
                    <img src="/images/chocolate-2.png" alt="" class="seller-content-images-img">
                </div>
                <div class="seller-content-bottom">
                    <p class="seller-content-bottom-text">Crazy enough chocolate originates from a bean just like the <br> coffee bean called Cacao. Cacao has been around for <br> thousands of years and was first discovered by the Native <br> American tribe called the Mayans.</p>
                    <NuxtLink to="/buy" class="seller-content-bottom-btn">Buy now</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template> 

<style scoped lang="scss">
.seller{
    margin-bottom: 126px;
    &-content{
        display: flex;
        flex-direction: column;
        align-items: center;
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
            margin-bottom: 50px;
        }
        &-images{
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 32px;
        }
        &-bottom{
            display: flex;
            justify-content: space-between;
            width: 100%;
            &-text{
                font-family: var(--font-family);
                font-weight: 400;
                font-size: 14px;
                line-height: 129%;
                letter-spacing: -0.02em;
                color: var(--chorniy);
                text-align: justify;
                width: 407px;
            }
            &-btn{
                border-radius: 100px;
                padding: 14px 40px;
                width: 162px;
                height: 50px;
                background: var(--oranzheviy);
            }
        }
    }
}

</style>