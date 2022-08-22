<template >
  <div class="todo">
    <div class="todo__title">
      <button class="todo__button" v-bind:class="[todo.done ? 'todo__button-completed' : 'todo__button-uncompleted']"
        @click="toggleDoneButton(todo.id)"></button>
      <h4 class="todo__text">{{ todo.text }}</h4>
    </div>
    <div class="todo__block">
      <p class="todo__caption" v-bind:class="[todo.done ? 'todo__caption_unactive' : 'todo__caption_active']">{{
          todo.done ? 'Выполнено' : 'В работе'
      }}</p>
      <p class="todo__caption">{{ todo.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  },

  methods: {
    toggleDoneButton(id) {
      this.$store.commit('changeButtonStatus', id)
    }
  }
}
</script>

<style scoped>
.todo {
  display: flex;
  margin: 0 0 0 40px;
  justify-content: space-between;
  border-top: 1px #EEEBE9 solid;
  padding: 20px 0 20px 0;
}

.todo__title {
  display: flex;
}

.todo__button {
  padding: 0;
  background-color: inherit;
  border: none;
  width: 25px;
  height: 20px;
  cursor: pointer;
}

.todo__button-completed {
  background-image: url(@/static/images/completed.svg);
}

.todo__button-uncompleted {
  background: url(@/static/images/not-completed.svg) 100% 100% no-repeat;
}

.todo__text {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding-left: 36px
}

.todo__block {
  display: flex;
  justify-content: space-between;
}

.todo__caption {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding-right: 48px;
}

.todo__caption_active {
  color: rgba(248, 155, 17, 1);
  padding-right: 64px;
}

.todo__caption_unactive {
  color: rgba(19, 78, 193, 1);
}

.todo__caption:last-child {
  padding-left: 30px;
}
</style>
