<template >
  <div class="popup">
    <form class="popup__form" @submit.prevent="onSubmit">
      <button type="button" class="popup__button-close" @click="closePopup"></button>
      <h3 class="popup__title">Создать новую задачу</h3>
      <p class="popup__subtitle">Описание</p>
      <input type="text" class="popup__input" placeholder="Введите описание" v-model="textTodo" />
      <button type="submit" class="popup__button-submit">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textTodo: ''
    }
  },

  methods: {
    closePopup() {
      this.$store.commit('openPopup')
    },

    onSubmit() {
      const todo = {
        id: Math.random(),
        done: false,
        text: this.textTodo,
        date: new Date().toLocaleDateString(),
      }
      this.$store.commit('addTodo', todo)
      this.closePopup()
    }
  },
}
</script>

<style scoped>
.popup {
  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup__form {
  background-color: #FFFFFF;
  border-radius: 6px;
  padding: 40px 40px 50px;
  width: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.popup__button-close {
  background: url(@/static/images/close.svg) 100% 100% no-repeat;
  width: 22px;
  height: 22px;
  border-radius: 5px;
  border: none;
  padding: 0;
  position: absolute;
  right: 38px;
  cursor: pointer;
}

.popup__title {
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}

.popup__subtitle {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding: 30px 0 5px;
}

.popup__input {
  width: 100%;
  border: 1px rgba(221, 226, 228, 1) solid;
  border-radius: 8px;
  padding: 11px 0 11px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  box-sizing: border-box;
}

.popup__button-submit {
  margin-top: 30px;
  background-color: #F0F5FF;
  border-radius: 8px;
  border: none;
  color: #314B99;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding: 12px 40px;
  align-self: center;
  cursor: pointer;
}
</style>
