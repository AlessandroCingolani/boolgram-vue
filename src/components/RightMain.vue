<script>
import { store } from "../data/store";
export default {
  name: "RightMain",
  data() {
    return {
      store,
    };
  },
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
      <span><strong>michelepapagni</strong></span>
      <span>Michele Papagni</span>
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
        v-for="suggestion in store.profiles"
        :key="suggestion.id"
        class="col-12 my-4 d-flex justify-content-between align-items-center"
      >
        <div class="suggestion-profile d-flex align-items-center">
          <div class="profile-img">
            <img :src="suggestion.profile_picture" alt="" />
          </div>
          <span class="ps-3">{{ suggestion.profile_name }}</span>
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
