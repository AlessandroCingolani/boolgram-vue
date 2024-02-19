<script>
export default {
  name: "RightMain",
};
</script>

<template>
  <!-- Utent profile -->
  <div
    class="my-profile mt-3 d-flex justify-content-between align-items-center"
  >
    <div class="img-profile">
      <img src="/img/profile.jpg" alt="profile" />
    </div>
    <div class="nickname d-flex flex-column">
      <span>Nickname</span>
      <span>Real name</span>
    </div>
    <a class="ac_btn" href="">Pass at</a>
  </div>
  <!-- Suggestions -->
  <div class="suggestions">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <span>Suggerimenti per te</span>
        <span>Mostra tutti</span>
      </div>
      <div
        class="col-12 my-4 d-flex justify-content-between align-items-center"
      >
        <div class="suggestion-profile d-flex align-items-center">
          <div class="profile-img">
            <img src="/img/profile.jpg" alt="" />
          </div>
          <span class="ps-3">Name profile</span>
        </div>
        <a href="#" class="ac_btn">Segui</a>
      </div>
    </div>
  </div>
  <div class="footer-right-main mt-5">
    <span class="copyright text-uppercase"
      >&copy; 2020 Instagram form facebook
    </span>
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
.suggestions {
  margin-top: 90px;
  .suggestion-profile {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
