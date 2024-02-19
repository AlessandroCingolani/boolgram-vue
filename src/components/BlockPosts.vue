<script>
import CardPost from "./partials/CardPost.vue";
import { store } from "../data/store";
export default {
  name: "BlockPosts",
  components: {
    CardPost,
  },

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="posts-container">
    <CardPost v-for="post in store.posts" :key="post.id" :post="post" />
  </div>
</template>

<style lang="scss" scoped></style>
