<script>
import HeaderNav from "./components/HeaderNav.vue";
import MainContent from "./components/MainContent.vue";
import { store } from "./data/store";
import axios from "axios";
export default {
  name: "App",
  components: {
    HeaderNav,
    MainContent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi(type) {
      store.isLoading = false;
      axios.get(store.apiUrl + type).then((results) => {
        if (type == "posts") {
          store[type] = results.data;
        } else if (type == "profiles") {
          store[type] = results.data;
        }
        store.isLoading = true;
      });
    },
  },
  mounted() {
    this.getApi("posts");
    this.getApi("profiles");
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
