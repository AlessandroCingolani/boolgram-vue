<script>
export default {
  name: "SkeletonPosts",
};
</script>

<template>
  <div class="card mb-5">
    <!-- Header -->
    <div
      class="card-header custom-bg d-flex align-items-center justify-content-between"
    >
      <div class="name-img d-flex align-items-center">
        <div class="profile-img">
          <div class="img"></div>
        </div>
        <div class="nickname d-flex flex-column">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- Post image -->
    <div class="post-image">
      <div class="img"></div>
    </div>
    <!-- Body card -->
    <div class="card-body">
      <div class="likes-to">
        <div class="img-likes d-flex align-items-center">
          <div class="img"></div>
          <span class="ps-3"></span>
        </div>
      </div>
      <div class="text-post">
        <span></span>
      </div>
      <!-- Comments -->
      <div class="comments d-flex flex-column mt-3">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-bg {
  background-color: white;
  .name-img {
    .profile-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;

      overflow: hidden;
      .img {
        border-radius: 50%;
        overflow: hidden;
        width: 100%;
        height: 100%;
        animation: pulse-bg 1s infinite;
      }
    }
    .nickname {
      span {
        margin-left: 10px;
        width: 200px;
        height: 13px;
        animation: pulse-bg 1s infinite;
        &:last-child {
          margin-left: 10px;
          margin-top: 5px;
          width: 150px;
          height: 13px;
          animation: pulse-bg 1s infinite;
        }
      }
    }
  }
}
.post-image {
  .img {
    width: 100%;
    height: 600px;
    animation: pulse-bg 1s infinite;
  }
}

.likes-to {
  .img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    animation: pulse-bg 1s infinite;
  }
  span {
    width: 100px;
    height: 13px;
    margin-left: 10px;
    animation: pulse-bg 1s infinite;
  }
}
.comments {
  span {
    width: 100px;
    height: 13px;
    margin: 10px 10px;
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
