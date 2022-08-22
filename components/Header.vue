<template>
  <div class="header">
    <h1 class="header__title">To do list</h1>
    <button class="header__button-add" @click="openPopup"></button>
  </div>
</template>

<script>
export default {
  methods: {
    openPopup() {
      this.$store.commit('openPopup')
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
}

.header__title {
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(22, 25, 29, 1);
  margin: 0;
  align-self: center;
}

.header__button-add {
  background-image: url(@/static/images/button-add.svg);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  align-self: center;
}
</style>
