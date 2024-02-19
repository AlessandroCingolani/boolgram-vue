<script>
import BlockStories from "./BlockStories.vue";
import BlockPosts from "./BlockPosts.vue";
export default {
  name: "LeftMain",
  components: {
    BlockStories,
    BlockPosts,
  },
};
</script>

<template>
  <BlockStories />
  <BlockPosts />
</template>

<style lang="scss" scoped></style>
