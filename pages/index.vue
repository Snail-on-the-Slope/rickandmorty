<template>
  <div class="container">
    <div>
      <h1 class="title">rickandmorty</h1>
    </div>
    <div class="app-main-layout">
      <Loader v-if="loading" />

      <main class="app-content" :class="{ height: error }" v-else>
        <div class="error-page" v-if="error">
          <h1>An error has occurred</h1>
          <p>Please refresh the page</p>
          <div class="button-reload" @click.prevent="reloadPage">
            <p>Reload page</p>
          </div>
        </div>
        <Characters v-else />
      </main>
    </div>
  </div>
</template>

<script>
import Characters from "@/components/Characters";
import Loader from "@/components/Loader";

export default {
  name: "main-layout",
  data: () => ({
    loading: true,
    error: false,
  }),
  async mounted() {
    if (!this.$store.getters.characters) {
      await this.$store.dispatch("fetchСharacters");
    }
    this.loading = false;
    this.error = this.$store.getters.error;

    const that = this;
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        that.loadMore();
      }
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    async loadMore() {
      await this.$store.dispatch("fetchMoreСharacters");
    },
  },
  components: {
    Characters,
    Loader,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding-top: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #51627412;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;

  @media (max-width: 400px) {
    font-size: 40px;
  }
}
</style>
