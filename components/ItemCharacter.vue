<template>
  <div class="item" @click="goToLotPage">
    <img class="item__img" :src="data.image" alt />
    <h2 class="item__name">{{ data.name }}</h2>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    goToLotPage() {
      this.$router.push("/item/" + this.data.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  border-radius: 0.5rem;
  width: 410px;
  height: 220px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #516274;
  color: #fff;

  &__img {
    width: 230px;
    height: 220px;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center;
    object-fit: cover;
  }
  &__name {
    font-size: 1.5rem;
    margin: 0 auto;
  }
}

@media (max-width: 800px) {
  .item {
    width: 180px;
    height: 250px;
    flex-direction: column;
    padding-right: 0;
    padding-bottom: 5px;

    &__img {
      height: 180px;
      width: 180px;
    }
    &__name {
      margin: auto;
      font-size: 24px;
    }
  }
}
</style>