<template>
  <div id="app">
    <div class="content">
      <LeftMenu />

      <div class="container">
        <Header />
        <div class="main">
          <router-view />
        </div>

        <footer class="footer">
          <p><a href="">"ame" street food.</a> всі права захищені © 2021</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./components/Left-menu";
import Header from "./components/Header";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchInfo", "fetchProducts"]),
  },
  computed: {
    ...mapGetters(["info"]),
  },
  async mounted() {
    if (!Object.keys(this.info).length) {
      await this.fetchInfo();
    }
    await this.fetchProducts();
  },
  components: {
    LeftMenu,
    Header,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "./style/app.css";
</style>
