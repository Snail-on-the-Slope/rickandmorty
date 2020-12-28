<template>
  <div class="app-item-layout">
    <Loader v-if="loading" />

    <main
      class="app-content"
      :class="{ height: errorDataBase | errorId }"
      v-else
    >
      <div class="error-page" v-if="errorDataBase">
        <h1>An error has occurred</h1>
        <p>Please refresh the page</p>
        <div class="button-reload" @click.prevent="reloadPage">
          <p>Reload page</p>
        </div>
      </div>
      <div class="error-page" v-else-if="errorId">
        <h1>An error has occurred</h1>
        <p>
          Invalid Element Id.
          <br />Back to the home page
        </p>
        <div class="button-reload" @click.prevent="goToHome">
          <p>Go To Home</p>
        </div>
      </div>
      <ItemDetails v-else />
    </main>
    <div class="btn" @click.prevent="goToHome">home</div>
  </div>
</template>

<script>
import ItemDetails from "@/components/ItemDetails.vue";
import Loader from "@/components/Loader";

export default {
  name: "item-page",
  data: () => ({
    loading: true,
    errorDataBase: false,
    errorId: false,
  }),
  async created() {
    console.log(
      "this.$store.getters.characters",
      this.$store.getters.characters
    );
    if (!this.$store.getters.characters) {
      await this.$store.dispatch("fetchСharacters");
      this.errorDataBase = this.$store.getters.error;
    }

    if (!this.errorDataBase) {
      let item = await this.$store.dispatch(
        "fetchСharacterById",
        this.$route.params.id
      );
      if (!item) {
        this.errorId = true;
      }
    }
    this.loading = false;
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    reloadPage() {
      window.location.reload();
    },
  },
  components: {
    ItemDetails,
    Loader,
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.app-item-layout {
  width: 100vw;
  height: 100vh;
  background: #51627412;
  position: relative;
  .app-content {
    @extend %error-page;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn {
    width: 140px;
    height: 50px;
    background: #516274;
    color: #fff;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    text-transform: uppercase;
    position: fixed;
    bottom: 40px;
    right: 40px;
    @media (max-width: 640px) {
      font-size: 20px;
      width: 110px;
      height: 40px;
      bottom: 20px;
      right: 20px;
    }
  }
}
</style>