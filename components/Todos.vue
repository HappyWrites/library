<template >
  <div class="todos">
    <div class="todos__panel">
      <p class="todos__description">Описание</p>
      <div class="todos__block">
        <p class="todos__description">Статус</p>
        <p class="todos__description">Дата</p>
      </div>
    </div>
    <Todo v-for="todo in this.todos" :todo="todo" :key="todo.id" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getTodos");
  },

  computed: {
    todos() {
      if (this.$store.state.sortByDataActive) {
        return this.$store.getters.getSortByData;
      } else if (this.$store.state.sortByStatusActive) {
        return this.$store.getters.getSortByStatus;
      } else {
        return this.$store.getters.getSearchTodos;
      }
    }
  },
}
</script>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  margin: 10px 0 0;
}

.todos:last-child {
  border-bottom: 1px #EEEBE9 solid;
}

.todos__panel {
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px 80px;
}

.todos__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  border-left: 1px rgba(196, 196, 196, 1) solid;
  margin: 0;
  padding: 5px 85px 5px 20px;
}

.todos__block {
  display: flex;
  justify-content: space-between;
}
</style>
