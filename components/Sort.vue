<template>
  <div class="sort">
    <h3 class="sort__title">Сортировать по:</h3>
    <div class="sort__buttons">
      <button class="sort__button sort__button_active" @click="getNotSort">Без сортировки</button>
      <button class="sort__button" v-bind:class="[this.$store.state.sortIsActive ? 'sort__button_active' : '']"
        @click="getSortByDate">Датe</button>
      <button class="sort__button" v-bind:class="[this.$store.state.sortIsActive ? 'sort__button_active' : '']"
        @click="getSortByStatus">Статусу</button>
    </div>
    <button class="sort__button_toggle" @click="toggleClassButton"></button>
  </div>
</template>
<script>

export default {
  methods: {
    toggleClassButton() {
      this.$store.commit('changeSortButton')
    },

    getSortByDate() {
      this.$store.commit('changeSortByData')
    },

    getSortByStatus() {
      this.$store.commit('changeSortByStatus')
    },

    getNotSort() {
      this.$store.commit('changeNotSort')
    }
  }
}
</script>
<style scoped>
.sort {
  display: flex;
}

.sort__title {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 30px;
}

.sort__button {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 17px;
  padding: 0;
  border: 0;
  background-color: inherit;
  display: none;
  cursor: pointer;
}

.sort__button_active {
  display: block
}

.sort__button_toggle {
  background: url(@/static/images/menu-sort.svg) 100% 100% no-repeat;
  background-size: cover;
  width: 12px;
  height: 6px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: inherit;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 6px;
}
</style>
