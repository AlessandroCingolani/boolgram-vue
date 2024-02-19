<script>
export default {
  name: "SingleStory",
  props: {
    imgProfile: String,
    nickname: String,
  },
};
</script>

<template>
  <div class="story d-flex flex-column align-items-center">
    <div class="story-image">
      <img :src="imgProfile" alt="" />
    </div>
    <span
      ><strong>{{
        nickname.length < 8 ? nickname : nickname.substring(0, 8) + "..."
      }}</strong></span
    >
  </div>
</template>

<style lang="scss" scoped>
.story {
  cursor: pointer;
  margin: 40px 30px;
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
      height: 100%;
    }
  }
}
</style>
