<template>
  <div class="item-page">
    <div class="content__left">
      <img class="item__image" :src="item.image" alt="image" />
    </div>

    <div class="content__right">
      <div class="item__name">{{ item.name }}</div>
      <div class="item__text">
        <b>Status:</b>
        {{ item.status }}
      </div>
      <div class="item__text">
        <b>Gender:</b>
        {{ item.gender }}
      </div>
      <div class="item__text"><b>Location:</b> {{ item.location.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-page",
  data: () => ({
    item: null,
  }),
  created() {
    this.item = this.$store.getters.characterById;
  },
};
</script>

<style lang="scss" scoped>
.item {
  &-page {
    display: flex;
    align-items: center;
    background: #516274;
    color: #fff;
    height: 300px;
    width: 800px;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  &__image {
    height: 100%;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center;
    object-fit: cover;
  }
  &__name {
    padding-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  &__text {
    padding-bottom: 5px;
    font-size: 22px;
  }
}

.content__right {
  padding-left: 50px;
}

@media (min-width: 801px) {
  .content__left {
    height: 100%;
  }
}

@media (max-width: 800px) {
  .item {
    &-page {
      flex-direction: column;
      width: 300px;
      height: 570px;
    }
    &__image {
      height: 300px;
    }
  }
  .content__right {
    padding-left: 20px;
    padding-top: 30px;
  }
}

@media (max-width: 640px) {
  .item {
    &-page {
      width: 200px;
      height: 380px;
    }
    &__image {
      height: 200px;
    }
    &__name {
      padding-bottom: 10px;
      font-size: 22px;
    }
    &__text {
      padding-bottom: 3px;
      font-size: 16px;
    }
  }
  .content__right {
    padding-left: 10px;
    padding-top: 15px;
  }
}
</style>