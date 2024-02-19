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
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="left-main">
            <LeftMain />
          </div>
        </div>
        <div class="col-4">
          <div class="right-main">
            <RightMain />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
