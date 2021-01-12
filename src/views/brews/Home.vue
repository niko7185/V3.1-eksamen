<template>
  <h2 v-if="!user.brews.length">You no brews yet</h2>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      user: null,
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  watch: {
    $route(value) {
      if (value.query.update) {
        
        this.user = JSON.parse(localStorage.getItem('user'));
        this.$router.push("/home");
      }
    }
  }
}
</script>

<style scoped>
  h2 {
    font-weight: normal;
    opacity: 0.4;
  }
</style>
