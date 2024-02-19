<script>
import SingleStory from "./partials/SingleStory.vue";
export default {
  name: "BlockStories",
  components: {
    SingleStory,
  },
};
</script>

<template>
  <div class="stories_container d-flex flex-wrap">
    <SingleStory />
  </div>
</template>

<style lang="scss" scoped>
.stories_container {
  margin-bottom: 60px;
  background-color: white;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 8px;
}
</style>
