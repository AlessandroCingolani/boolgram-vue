<script>
export default {
  name: "CardPost",
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
          <img src="/img/profile.jpg" alt="" />
        </div>
        <span class="ps-4">Name profile</span>
      </div>
      <i class="fa-solid fa-ellipsis"></i>
    </div>
    <!-- Post image -->
    <div class="post-image">
      <img
        src="https://flynn.boolean.careers/exercises/img/boolgram/landscape1.jpg"
        alt="post-image"
      />
    </div>
    <!-- Body card -->
    <div class="card-body">
      <div class="card-title">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
      </div>
      <div class="likes-to">
        <div class="img-likes">
          <img
            src="https://flynn.boolean.careers/exercises/img/boolgram/landscape1.jpg"
            alt="name like"
          />
          <span class="ps-3"
            >Piace a <strong>trudie35 </strong> e <strong>4 altri</strong></span
          >
        </div>
      </div>
      <div class="d-flex flex-column">
        <span>Mostra tutti e 4 commenti</span>
        <span><strong>Nome commento </strong>Commento</span>
      </div>
      <div class="time-posted mt-4">
        <span>33 Ore fa</span>
      </div>
    </div>
    <!-- Footer -->
    <div
      class="card-footer text-muted custom-bg d-flex justify-content-between align-items-center"
    >
      <input placeholder="Add a comment" class="w-75" type="text" />
      <a href="#">Publish</a>
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
      border: 3px solid rgb(219, 4, 4);

      overflow: hidden;
      img {
        border-radius: 50%;
        overflow: hidden;
        padding: 2px;
        width: 100%;
      }
    }
    span {
      font-size: 1.1rem;
      font-weight: bolder;
    }
  }
}
.post-image {
  img {
    width: 100%;
  }
}
.likes-to {
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>
