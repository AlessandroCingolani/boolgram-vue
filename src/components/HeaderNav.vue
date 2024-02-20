<script>
export default {
  name: "HeaderNav",
};
</script>

<template>
  <header>
    <div class="container h-100">
      <nav class="d-flex justify-content-between align-items-center h-100">
        <div class="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div class="search">
          <input
            class="form-control"
            style="text-align: center"
            type="text"
            placeholder="Search"
          />
        </div>
        <div class="nav-profile d-flex align-items-center">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-house mx-3"></i>
          <div class="small-profile">
            <img src="/img/profile.jpg" alt="profile" />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  width: 100px;
  img {
    width: 100%;
  }
}

.small-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.nav-profile {
  i {
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
      scale: 1.1;
    }
  }
}
</style>
