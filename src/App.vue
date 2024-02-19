<script>
import HeaderNav from "./components/HeaderNav.vue";
import MainContent from "./components/MainContent.vue";
export default {
  name: "App",
  components: {
    HeaderNav,
    MainContent,
  },
};
</script>

<template>
  <HeaderNav />
  <div class="ac_container">
    <MainContent />
  </div>
</template>

<style lang="scss">
@use "../scss/main.scss";
</style>
