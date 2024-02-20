<script>
export default {
  name: "SkeletonSuggestions",
};
</script>

<template>
  <div class="suggestions">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <span>Suggerimenti per te</span>
        <span>Mostra tutti</span>
      </div>
      <!-- Skeleton Cols -->
      <div
        class="col-12 mt-4 d-flex justify-content-between align-items-center"
      >
        <div class="suggestion-profile d-flex align-items-center">
          <div class="profile-img">
            <div class="img"></div>
          </div>

          <div class="nickname-skeleton d-flex flex-column mt-3">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        class="col-12 mt-4 d-flex justify-content-between align-items-center"
      >
        <div class="suggestion-profile d-flex align-items-center">
          <div class="profile-img">
            <div class="img"></div>
          </div>

          <div class="nickname-skeleton d-flex flex-column mt-3">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        class="col-12 mt-4 d-flex justify-content-between align-items-center"
      >
        <div class="suggestion-profile d-flex align-items-center">
          <div class="profile-img">
            <div class="img"></div>
          </div>

          <div class="nickname-skeleton d-flex flex-column mt-3">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        class="col-12 mt-4 d-flex justify-content-between align-items-center"
      >
        <div class="suggestion-profile d-flex align-items-center">
          <div class="profile-img">
            <div class="img"></div>
          </div>

          <div class="nickname-skeleton d-flex flex-column mt-3">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        class="col-12 mt-4 d-flex justify-content-between align-items-center"
      >
        <div class="suggestion-profile d-flex align-items-center">
          <div class="profile-img">
            <div class="img"></div>
          </div>

          <div class="nickname-skeleton d-flex flex-column mt-3">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        class="col-12 mt-4 d-flex justify-content-between align-items-center"
      >
        <div class="suggestion-profile d-flex align-items-center">
          <div class="profile-img">
            <div class="img"></div>
          </div>

          <div class="nickname-skeleton d-flex flex-column mt-3">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.suggestions {
  margin-top: 90px;
  .suggestion-profile {
    .img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      animation: pulse-bg 1s infinite;
    }
  }
  .nickname-skeleton {
    span {
      width: 120px;
      height: 13px;
      margin-left: 10px;
      animation: pulse-bg 1s infinite;
      &:last-child {
        margin: 10px 10px;
        width: 100px;
        height: 13px;
        animation: pulse-bg 1s infinite;
      }
    }
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
