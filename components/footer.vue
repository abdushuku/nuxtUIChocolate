<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrap">
        <h2 class="footer-wrap-title">
          <span>Chocolate</span> a delicious <br> cure for a bad day
        </h2>
        <div class="footer-wrap-right">
          <div class="footer-wrap-right-first">
            <p class="footer-wrap-right-first-contact">Contact us</p>
            <p class="footer-wrap-right-first-number">+998 90 394 06 15</p>
            <p class="footer-wrap-right-first-email">
              abduhakimovabdushukur@gmail.com
            </p>
          </div>
          <div class="footer-wrap-right-second">
            <img src="/images/footerinstagram.png" alt="" />
            <img src="/images/footertwitter.png" alt="" />
          </div>
        </div>
      </div>
      <hr>
      <div class="footer-navbar">
        <ul class="footer-navbar-list">
            <li class="footer-navbar-list-item"><a href="" class="footer-navbar-list-link">Home</a></li>
            <li class="footer-navbar-list-item"><a href="" class="footer-navbar-list-link">How it’s made?</a></li>
            <li class="footer-navbar-list-item"><a href="" class="footer-navbar-list-link">Our products</a></li>
            <li class="footer-navbar-list-item"><a href="" class="footer-navbar-list-link">Top sellers</a></li>
            <li class="footer-navbar-list-item"><a href="" class="footer-navbar-list-link">Chocolate is loved</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: #1e1823;
  padding: 50px;
  &-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 63px;
    &-title{
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 28px;
        line-height: 121%;
        letter-spacing: -0.02em;
        color: #fff;
        & span{
            color: var(--oranzheviy);
        }
    }
    &-right {
      display: flex;
      align-items: flex-start;
      column-gap: 63px;

      &-first {
        display: flex;
        flex-direction: column;
        row-gap: 14px;
      }
      &-second {
        display: flex;
        align-items: center;
        column-gap: 18px;
      }
    }
  }
  &-navbar{
    margin-top: 23px;
    &-list{
        display: flex;
        align-items: flex-start;
        column-gap: 24px;
    }
  }
}
</style>