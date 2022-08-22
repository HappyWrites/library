<template>
  <div class="page">
    <Header />
    <Main />
    <Popup v-if="this.$store.state.popupIsActive" />
  </div>
</template>

<script>

export default {
  mounted() {
    this.$store.commit('initialiseStore');

    this.$store.subscribe((mutation, state) => {
      localStorage.setItem('store', JSON.stringify(state));
    });
  }
}
</script>

<style scoped>
.page {
  font-family: 'VeloSansText', sans-serif;
  background-color: #F5F5F5;
  padding: 95px 140px;
  min-height: 100vh;
}
</style>
