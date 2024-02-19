<script>
export default {
  name: "RightMain",
};
</script>

<template>
  <div
    class="my-profile mt-3 ms-3 d-flex justify-content-between align-items-center"
  >
    <div class="img-profile">
      <img src="/img/profile.jpg" alt="profile" />
    </div>
    <div class="nickname d-flex flex-column">
      <span>Nickname</span>
      <span>Real name</span>
    </div>
    <a href="">Pass at</a>
  </div>
</template>

<style lang="scss" scoped>
.img-profile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
