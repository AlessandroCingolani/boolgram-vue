<script>
import LeftMain from "./LeftMain.vue";
import RightMain from "./RightMain.vue";
export default {
  name: "MainContent",
  components: {
    RightMain,
    LeftMain,
  },
};
</script>

<template>
  <main>
    <h1>main</h1>
    <LeftMain />
    <RightMain />
  </main>
</template>

<style lang="scss" scoped></style>
