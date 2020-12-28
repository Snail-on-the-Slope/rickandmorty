<template>
  <div class="characters">
    <div class="content" id="items">
      <Item v-for="(e, idx) in currentCharacters" :key="idx" :data="e" />
    </div>
  </div>
</template>

<script>
import Item from "@/components/ItemCharacter.vue";

export default {
  name: "characters",
  data: () => ({
    showModal: false,
  }),
  computed: {
    currentCharacters() {
      return this.$store.getters.characters;
    },
  },
  components: {
    Item,
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  padding-top: 20px;
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1300px) {
    justify-content: space-around;
  }
}
</style>