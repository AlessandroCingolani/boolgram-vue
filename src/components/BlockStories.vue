<script>
import SingleStory from "./partials/SingleStory.vue";
import { store } from "../data/store";
import SkeletonStories from "./partials/SkeletonStories.vue";
export default {
  name: "BlockStories",
  components: {
    SingleStory,
    SkeletonStories,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    getFirstSixStories() {
      return this.store.profiles.slice(0, 6);
    },
  },
};
</script>

<template>
  <div class="stories_container d-flex flex-wrap justify-content-center">
    <SkeletonStories v-if="!store.isLoading" />
    <SingleStory
      v-else
      v-for="story in getFirstSixStories"
      :key="story.id"
      :imgProfile="story.profile_picture"
      :nickname="story.profile_name"
    />
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
