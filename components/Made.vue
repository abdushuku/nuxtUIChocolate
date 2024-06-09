<template>
  <div class="container">
    <div  class="made" data-speed="1.5">
        <h2 class="made-title">HOW IT'S <span>MADE?</span></h2>
        <div class="made-content">
            <div class="made-content-images">
                <img src="/images/made-banner.png" alt="" class="banner">
                <IconsPlay class="icon"/>
            </div>
            <div class="made-content-info">
                <h2 class="made-content-info-title">Try  our chocolates today and <br> discover the perfect balance of flavor</h2>
                <ul class="made-content-info-ol">
                    <li>Heat the milk in a saucepan without bringing it to a boil. Add sugar and cocoa powder.</li>
                    <li>At the same time, prepare a water bath. Melt the butter on it."Mix" the milk mixture and already liquid butter. Mix thoroughly with a silicone spatula so that the mass becomes uniform and silky.</li>
                    <li>"Mix" the milk mixture and already liquid butter. Mix thoroughly with a silicone spatula so that the mass becomes uniform and silky.</li>
                    <li>Heat the mixture over low heat, letting it barely boil.</li>
                    <li>Pour the chocolate into special containers (can be replaced with ice molds). Allow to cool and harden.</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.made{
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 50px;
    margin-bottom: 126px;
    &-title{
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 24px;
        line-height: 117%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
        text-align: center;
        color: var(--chorniy);
        & span{
            color: var(--oranzheviy);
        }
    }
    &-content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        &-images{
            position: relative;
            & img{
                cursor: pointer;
            }
            & .icon{
                position: absolute;
                top: 43%;
                left: 47%;
                width: 44px;
                height: 44px;
                z-index: 99;
            }
        }
        &-info{
            display: flex;
            flex-direction: column;
            padding: 32px;
            &-title{
                font-family: var(--font-family);
                font-weight: 600;
                font-size: 18px;
                line-height: 133%;
                color: var(--chorniy);
                margin-bottom: 28px;
            }
            &-ol{
                list-style: circle;
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 20px;
                & li{
                    font-family: var(--font-family);
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 129%;
                    letter-spacing: -0.02em;
                    color: var(--chorniy);
                }
            }
        }
    }
}
</style>