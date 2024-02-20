<script>
import CardPost from "./partials/CardPost.vue";
import { store } from "../data/store";
import SkeletonPosts from "./partials/SkeletonPosts.vue";
export default {
  name: "BlockPosts",
  components: {
    CardPost,
    SkeletonPosts,
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
    <SkeletonPosts v-if="!store.isLoading" />
    <CardPost v-else v-for="post in store.posts" :key="post.id" :post="post" />
  </div>
</template>

<style lang="scss" scoped></style>
