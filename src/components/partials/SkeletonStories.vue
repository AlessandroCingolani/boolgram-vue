<script>
export default {
  name: "SkeletonStories",
};
</script>

<template>
  <div class="loader">
    <img src="/img/spinner.gif" alt="" class="load" />
  </div>
  <div class="story d-flex flex-column align-items-center">
    <div class="story-image">
      <div class="img"></div>
    </div>
    <span><strong></strong></span>
  </div>
  <div class="story d-flex flex-column align-items-center">
    <div class="story-image">
      <div class="img"></div>
    </div>
    <span><strong></strong></span>
  </div>
  <div class="story d-flex flex-column align-items-center">
    <div class="story-image">
      <div class="img"></div>
    </div>
    <span><strong></strong></span>
  </div>
  <div class="story d-flex flex-column align-items-center">
    <div class="story-image">
      <div class="img"></div>
    </div>
    <span><strong></strong></span>
  </div>
  <div class="story d-flex flex-column align-items-center">
    <div class="story-image">
      <div class="img"></div>
    </div>
    <span><strong></strong></span>
  </div>
  <div class="story d-flex flex-column align-items-center">
    <div class="story-image">
      <div class="img"></div>
    </div>
    <span><strong></strong></span>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  margin-top: 20px;
  width: 100%;
  text-align: center;
  img {
    width: 50px;
    height: 50px;
  }
}
.story {
  margin: 30px 30px;
  .story-image {
    width: 70px;
    height: 70px;
    overflow: hidden;
    .img {
      animation: pulse-bg 1s infinite;
      border-radius: 50%;
      border: 1px solid gray;
      width: 100%;
      height: 100%;
    }
  }
  span {
    margin-top: 5px;
    width: 100%;
    height: 12px;
    animation: pulse-bg 1s infinite;
  }
}

@keyframes pulse-bg {
  0% {
    background-color: rgba(221, 221, 221, 0.873);
  }
  50% {
    background-color: rgba(221, 221, 221, 0.525);
  }
  100% {
    background-color: rgba(221, 221, 221, 0.287);
  }
}
</style>
