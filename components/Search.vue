<template>
  <form class="search" @submit.prevent="getSearchValue">
    <button type="submit" class="search__image"></button>
    <input class="search__input" placeholder="Поиск ID, Имени, статуса или даты" v-model="searchValue" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },

  methods: {
    getSearchValue() {
      this.$store.commit('changeSearchValue', this.searchValue)
    }
  }
}
</script>

<style>
.search {
  margin-left: 40px;
  display: flex;

}

.search__image {
  background-image: url(@/static/images/search.svg);
  width: 18px;
  height: 18px;
  margin-right: 16px;
  padding: 0;
  border: none;
  cursor: pointer;
}

.search__input {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #C4C4C4;
  margin: 0;
  padding: 0;
  border: none;
  width: 250px;
  height: 18px;
  background-color: inherit;
}
</style>
