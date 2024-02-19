<script>
export default {
  name: "CardPost",
  props: {
    post: Object,
  },
  data() {
    return {
      commentsToShow: [],
      showAllComments: false,
    };
  },
  methods: {
    click(post) {
      this.showAllComments = !this.showAllComments;
      console.log(post);
    },
  },
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
          <img :src="post.profile_picture" alt="" />
        </div>
        <span class="ps-4">{{ post.profile_fullname }}</span>
      </div>
      <i class="fa-solid fa-ellipsis"></i>
    </div>
    <!-- Post image -->
    <div class="post-image">
      <img :src="post.post_image" alt="post-image" />
    </div>
    <!-- Body card -->
    <div class="card-body">
      <div class="card-title">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
      </div>
      <div class="likes-to">
        <div class="img-likes">
          <img :src="post.likes[0].profile_picture" alt="name like" />
          <span class="ps-3"
            >Piace a <strong>{{ post.likes[0].username }} </strong> e
            <strong>{{ post.likes.length - 1 }} altri</strong></span
          >
        </div>
      </div>
      <div class="text-post">
        <span
          ><strong>{{ post.profile_name }} </strong> {{ post.post_text }}</span
        >
      </div>
      <!-- Comments -->
      <div class="d-flex flex-column mt-3">
        <span
          class="show-comments"
          @click="click(post.comments)"
          v-if="post.comments.length > 3"
          >Mostra tutti e {{ post.comments.length }} commenti</span
        >
        <span
          v-for="(comment, index) in post.comments.slice(0, 3)"
          :key="comment + index"
          ><strong>{{ comment.username }} </strong> {{ comment.text }}</span
        >
      </div>
      <div class="time-posted mt-4">
        <span>33 Ore fa</span>
      </div>
    </div>
    <!-- Footer -->
    <div
      class="card-footer text-muted custom-bg d-flex justify-content-between align-items-center"
    >
      <input placeholder="Add a comment" class="w-100" type="text" />
      <a class="ac_btn" href="#">Publish</a>
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
        height: 100%;
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
.show-comments {
  color: gray;
  cursor: pointer;
}
.card-footer {
  padding: 10px;
  input {
    border: none;
    &:focus {
      outline: none;
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
