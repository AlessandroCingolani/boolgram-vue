<script>
export default {
  name: "SingleStory",
};
</script>

<template>
  <div class="story d-flex flex-column align-items-center">
    <div class="story-image">
      <img src="/img/profile.jpg" alt="" />
    </div>
    <span><strong>Name</strong></span>
  </div>
</template>

<style lang="scss" scoped>
.story {
  padding: 40px;
  .story-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid rgb(219, 4, 4);
    overflow: hidden;
    img {
      border-radius: 50%;
      overflow: hidden;
      padding: 2px;
      width: 100%;
    }
  }
}
</style>
